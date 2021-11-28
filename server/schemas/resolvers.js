const { AuthenticationError } = require("apollo-server-express");
const { User, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  "pk_test_51K0E5yDoq6v40HHVr65YQEu1jpTTAF5F2akPEla7CdYt6boI09ZhRjcUE4Wv6ynqdFNB2UC0ewWKdbCtOaG0n13l00j3JLwC02"
);

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "tags",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in!");
    },
    products: async (parent, args) => {
      return await Product.find();
    },
    productsByTag: async (parent, { tags }) => {
      return await Product.find({ tags: tags }).populate("tags");
    },
    product: async (parent, { _id }) => {
      return await Product.findOne({ _id: _id }).populate("tags");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "tags",
        });
        return user.orders.id(_id);
      }
      throw new AuthenticationError("Not logged in");
    },
    tags: async (parent, args) => {
      return await Tag.find();
    },
    tag: async (parent, { _id }) => {
      return await Tag.findOne({ _id: _id });
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products").execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].prodName,
          description: products[i].prodDescrip,
          images: [`${url}/images/${products[i].prodImage[0]}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, email, password, shippingAddy }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        shippingAddy,
      });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (
      parent,
      { _id, firstName, lastName, email, password, shippingAddy },
      context
    ) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          context.user._id,
          {
            firstName,
            lastName,
            email,
            password,
            shippingAddy,
          },
          { new: true }
        );
      }
      throw new AuthenticationError("Not logged in");
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }
      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("That email does not exist!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Password is incorrect!");
      }

      const token = signToken(user);

      return { token, user };
    },
    addProduct: async (
      parent,
      { prodName, prodDescrip, price, prodImage, quantity, tags },
      context
    ) => {
      if (context.user) {
        return await Product.create({
          prodName,
          prodDescrip,
          price,
          prodImage,
          quantity,
          tags,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (
      parent,
      { _id, prodName, prodDescrip, price, prodImage, quantity, tags },
      context
    ) => {
      if (context.user) {
        return await Product.findOneAndUpdate(
          { _id },
          { prodName, prodDescrip, price, prodImage, quantity, tags }
        );
      }
      throw new AuthenticationError("Not logged in");
    },
    decProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    delProduct: async (parent, { _id }) => {
      const productToDelete = await Product.findOneAndDelete({ _id });
      return productToDelete;
    },
    addTags: async (parent, { tagName, tagDescription }) => {
      const tag = await Tag.create({ tagName, tagDescription });
      return tag;
    },
    updateTags: async (parent, { _id, tagName, tagDescription }) => {
      const tagToUpdate = await Tag.findOneAndUpdate(
        { _id },
        { tagName, tagDescription }
      );
      return tagToUpdate;
    },
    delTags: async (parent, { _id }) => {
      Tag.findOneAndDelete({ _id });
    },
  },
};

module.exports = resolvers;
