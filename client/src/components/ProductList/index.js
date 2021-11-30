import React, { useState } from "react";
import ProductCard from "../ProductCard";
import "./productlist.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_TAGS } from "../../Utils/queries";

const ProductList = () => {
  const [tagState, setTag] = useState("all");
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const something = data?.products || [];
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

  const tagClickHandler = async (e) => {
    let buttonValue = e.target.value
    await setTag(buttonValue)
    await console.log(tagState)
    console.log(productsToRender())
  } 

  // const productsToRender = tagState === "all" ? productsAll : productsAll.filter((product) => product.tag._id === tagState)
  const productsToRender = () => {
    if (tagState === "all") {
      return productsAll;
    } else {
      // return productsAll.filter((product) => product.tags._id === tagState)
      const renderProd = [];
      console.log(productsAll);
      for (let i = 0; i < productsAll.length; i++) {
        for (let j = 0; j < productsAll[i].tags.length; j++) {
          if (tagState === productsAll[i].tags[j]._id) {
            renderProd.push(productsAll[i]);

          }
        }
      }
      console.log(renderProd)
      return renderProd;
    }
  }


  return (
    <div>
      <div className="tag-btns">
          <button value="all" onClick={tagClickHandler}>
            All Products
          </button>
        {tagArr.map((tag) => (
          <button value={tag._id} onClick={tagClickHandler}>
            {tag.tagName}
          </button>
        ))}
      </div>
      <div className="productContainer">
        {productsToRender().map((item) => (
          <ProductCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
