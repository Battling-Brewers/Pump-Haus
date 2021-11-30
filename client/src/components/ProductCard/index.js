import React from "react";
import "./productcard.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, {useState} from "react";
import './productcard.css';
import { ADD_TO_CART } from "../../Utils/actions";
import { useStoreContext } from "../../Utils/GlobalState";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";


const ProductCard = ({ item }) => {
        // const [state, dispatch] = useStoreContext()
    // const { cart } = state
    // const addToCart = () => {
    //       dispatch({
    //         type: ADD_TO_CART,
    //         product: { ...item, purchaseQuantity: 1 }
    //       });
    // }
  let priceFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
  })
  let price = priceFormat.format(item.price)
  console.log(price)
  return (
    <div className="card-container">
      <div className="circle"></div>
      <img
        className="img1"
        src={`/images/${item.prodImage[0]}`}
        alt="product item"
      />
      <img
        className="img2"
        src={`/images/${item.prodImage[1]}`}
        alt="product item"
      />
      <div className="info">
        <h4 className="prod-title">{item.prodName}</h4>
        <h6 className="prod-title">{price}</h6>
        <div className="iconz">
          <ShoppingCartOutlined className="icon" />
          <SearchOutlined className="icon" />
          <FavoriteBorderOutlined className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
