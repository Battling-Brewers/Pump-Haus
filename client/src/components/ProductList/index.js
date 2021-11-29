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
  const popularProducts = [
    {
      id: 1,
      img: "https://www.pngarts.com/files/2/Arnold-Schwarzenegger-PNG-Download-Image.png",
    },
    {
      id: 2,
      img: "https://www.pngarts.com/files/2/Arnold-Schwarzenegger-PNG-Image.png",
    },
    {
      id: 3,
      img: "https://www.pngarts.com/files/6/Body-Fitness-PNG-Pic.png",
    },
    {
      id: 4,
      img: "https://www.pngarts.com/files/6/Fitness-Silhouette-PNG-Image-Background.png",
    },
    {
      id: 5,
      img: "https://www.pngarts.com/files/6/Female-Fitness-Transparent-Image.png",
    },
    {
      id: 6,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
      id: 7,
      img: "https://www.pngall.com/wp-content/uploads/4/Arnold-Schwarzenegger-Bodybuilding-PNG-HD-Image.png",
    },
    {
      id: 8,
      img: "https://www.pngarts.com/files/2/Arnold-Schwarzenegger-Free-PNG-Image.png",
    },
  ];

  return (
    <div className="productContainer">
      {productsToRender.map((item) => (
        <ProductCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default ProductList;
