import { Add, Remove } from "@mui/icons-material";
import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="productContainer">
      <div className="detailContainer">
        <img src={item.img} />
        <div className="details"></div>
      </div>
      <div className="priceContainer"></div>
    </div>
  );
};

export default CartItem;