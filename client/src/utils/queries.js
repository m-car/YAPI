import { gql } from "@apollo/client";

export const QUERY_SEARCH = gql`
  query searchResults($input: String) {
    search(input: $input) {
      _id
      title
      category
      description
      url
      auth
      https
      cors
    }
  }
`;

export const QUERY_API = gql`
  query getApi($id: ID!) {
    getApi(id: $id) {
      _id
      title
      category
      description
      url
      auth
      https
      cors
      rating
      reviews {
        _id
        api
        username
        rating
        comment
        date
      }
    }
  }
`;
