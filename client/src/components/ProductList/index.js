import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import "./productlist.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../Utils/queries";


const ProductList = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const something = data?.products || [];
  if (!loading) {
    console.log("HEWWO OUO", something);
  }

  const productsToRender = [];
  if (data) {
    console.log(something);
    data.products.map((product) => {
      productsToRender.push(product);
    });
  }
  


  return (
    <div className="productContainer">
      {productsToRender.map((item) => (
        <ProductCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default ProductList;
