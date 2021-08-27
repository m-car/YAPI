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
    title: String
    category: String
    description: String
    url: String
    auth: String
    https: String
    cors: String
    rating: Float
    reviews: [Review]
  }
  type Review {
    _id: ID
    api: ID! 
    username: String
    rating: Int
    comment: String
    date: Float
  }
  type Query {
    test: [API]
    search(input: String): [API]
    getApi(id: ID!): API
    getReviews(id: ID!): [Review]
  }
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(
     "id of api associated with this review"
      api: ID!
      username: String!
      rating: Int!
      comment: String
    ): Review
  }
`;

module.exports = typeDefs;
