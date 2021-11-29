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

export const QUERY_PRODUCTS = gql`
  {
    products {
      _id
      prodName
      prodDescrip
      price
      quantity
      prodImages
      tags {
        _id
        tagName
        tagDescription
        }
    }
  }
`