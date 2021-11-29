import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          prodName
          prodDescrip
          price
          prodImage
          quantity
        }
      }
    }
  }
`;