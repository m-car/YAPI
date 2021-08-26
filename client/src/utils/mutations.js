import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview(
    $api: String!
    $username: String
    $rating: Int
    $comment: String
  ) {
    addReview(
      api: $api
      username: $username
      rating: $rating
      comment: $comment
    ) {
      _id
      api
      username
      rating
      comment
      date
    }
  }
`;
