import React, { useState } from "react";
import ProductCard from "../ProductCard";
import "./productlist.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_TAGS } from "../../Utils/queries";

const something = () => {
  console.log("help me im dying")
}

const ProductList = () => {
  const [tag, setTag] = useState("all");
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const something = data?.tags || [];
  if (!loading) {
    console.log("HEWWO OUO", something);
  }

  let productsAll = [];
  if (data) {
    console.log(something);
    data.products.map((product) => {
      productsAll.push(product);
    });
  }
  let tagArr = [];
  if (data) {
    data.tags.map((tag) => {
      tagArr.push(tag);
    });
  }

  // const produtsToRender = productsAll.filter((product), product.tag.tagName === "" )

  return (
    <div>
      <div className="tag-btns">
          <button>
            <h6>All Products</h6>
          </button>
        {tagArr.map((tag) => (
          <button>
            <h6>{tag.tagName}</h6>
          </button>
        ))}
      </div>
      <div className="productContainer">
        {productsAll.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
