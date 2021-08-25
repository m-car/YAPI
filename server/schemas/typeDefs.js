const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    favorites: [API]
  }

  type API {
    _id: ID
    name: String
    category: String
    description: String
    auth: String
    https: String
    cors: String
  }
  type Review {
    _id: ID
    api: API
    username: String
    rating: Int
    comment: 
  }
  type Query {
    test: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
