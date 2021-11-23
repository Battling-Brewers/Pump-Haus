const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        shipping: String
    }

    type Image {
        url: String
        products: [Product] @relation
    }

    type Product {
        _id: ID!
        prodName: String!
        prodDescrip: String
        price: Float!
        prodImages: [Image] @relation
        tags: [Tag] @relation
    }

    type Tag {
        _id: ID!
        tagName: String
        tagDescription: String
        products: [Product] @relation
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        products: [Product]
        product(_id: String!): Product
        tags(_id: String!): Tag
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        delUser(_id: String!) : Auth
        updateUser(id: String!) : Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;