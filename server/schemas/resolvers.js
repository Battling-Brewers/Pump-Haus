const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
//const stripe = require('stripe')('INSERT_STRIPE_API_HERE);

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in!");
    },
    products: async (parent, args) => {
      return Product.find();
    },
    product: async (parent, { _id }) => {
      return Product.findOne({ _id: _id });
    },
    tags: async (parent, args) => {
      return Tag.find();
    },
    tag: async (parent, { _id }) => {
      return Tag.findOne({ _id: _id });
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
      { _id, firstName, lastName, email, password, shippingAddy }
    ) => {
      const userToUpdate = await User.findOneAndUpdate(
        { _id },
        {
          firstName,
          lastName,
          email,
          password,
          shippingAddy,
        }
      );
      const token = signToken(userToUpdate);
      return { token, userToUpdate };
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
      { prodName, prodDescrip, price, prodImage, tags }
    ) => {
      const product = await Product.create({
        prodName,
        prodDescrip,
        price,
        prodImage,
        tags,
      });
      return product;
    },
    updateProduct: async (
      parent,
      { _id, prodName, prodDescrip, price, prodImage, tags }
    ) => {
      const productToUpdate = await Product.findOneAndUpdate(
        { _id },
        { prodName, prodDescrip, price, prodImage, tags }
      );
      return productToUpdate;
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
