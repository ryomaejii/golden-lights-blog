import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles {
    nextJsBlogCollection {
      items {
        title
      }
    }
  }
`;
