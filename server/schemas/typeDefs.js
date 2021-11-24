const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    shippingAddy: String
  }

  type Product {
    _id: ID!
    prodName: String!
    prodDescrip: String
    price: Float!
    prodImage: [String]
    tags: [Tag] @relation
  }

  type Tag {
    _id: ID!
    tagName: String!
    tagDescription: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    products: [Product]
    product(_id: String!): Product
    tags: [Tag]
    tag(_id: String!): Tag
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
      _id: String!
      firstName: String
      lastName: String
      email: String
      password: String
      shippingAddy: String
    ): Auth
    login(email: String!, password: String!): Auth
    addProduct(
      prodName: String!
      prodDescrip: String
      price: Float!
      prodImage: [String]
      tags: [String]
    ): Product
    updateProduct(
      _id: String!
      prodName: String!
      prodDescrip: String
      price: Float!
      prodImage: [String!]
      tags: [String]
    ): Product
    delProduct(_id: String!): Product
    addTags(tagName: String!, tagDescription: String!): Tag
    updateTags(_id: String!, tagName: String, tagDescription: String): Tag
    delTags(_id: String!): Tag
  }
`;

module.exports = typeDefs;
