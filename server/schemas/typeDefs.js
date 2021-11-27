const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    shippingAddy: String,
    orders: [Order]
  }

  type Product {
    _id: ID!
    prodName: String!
    prodDescrip: String
    price: Float!
    prodImage: [String]
    quantity: Int
    tags: [Tag]
  }

  type Tag {
    _id: ID!
    tagName: String!
    tagDescription: String
  }

  type Order {
    _id: ID!
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    products: [Product]
    productsByTag(tags: ID!): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    tags: [Tag]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      shippingAddy: String
    ): Auth
    updateUser(
       firstName: String
      lastName: String
      email: String
      password: String
      shippingAddy: String
    ): User
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
    addProduct(
      prodName: String!
      prodDescrip: String
      price: Float!
      prodImage: [String]
      quantity: Int
      tags: [String]
    ): Product
    updateProduct(
      _id: String!
      prodName: String!
      prodDescrip: String
      price: Float!
      prodImage: [String!]
      quantity: Int
      tags: [String]
    ): Product
    decProduct(_id: ID!, quantity: Int!): Product
    delProduct(_id: String!): Product
    addTags(tagName: String!, tagDescription: String!): Tag
    updateTags(_id: String!, tagName: String, tagDescription: String): Tag
    delTags(_id: String!): Tag
  }
`;

module.exports = typeDefs;
