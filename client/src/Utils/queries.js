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

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
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
      prodImage
      tags {
        _id
        tagName
        tagDescription
      }
    }
    tags {
      _id
      tagName
      tagDescription
    }
  }
`;

export const QUERY_TAGS = gql`
  {
    tags {
      _id
      tagName
      tagDescription
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProduct($product: ID!) {
    product(_id: $product) {
      _id
      prodName
      prodDescrip
      price
      quantity
      prodImage
      tags {
        _id
        tagName
        tagDescription
      }
    }
  }
`;
