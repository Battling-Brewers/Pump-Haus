import React from "react";
import "./productcard.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useParams, Link } from "react-router-dom";
import SingleProduct from "../SingleProduct";

const ProductCard = ({ item }) => {
  let priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  let price = priceFormat.format(item.price);

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
        <Link
            to={`/product/${item._id}`}
            params={{product: item._id}}
            key={item._id}
            item={item}
          >
          <h4 className="prod-title">{item.prodName}</h4>
        </Link>
        <h6 className="prod-title">{price}</h6>
        <div className="iconz">
<<<<<<< HEAD
          <ShoppingCartOutlined onClick={console.log("kill me now")} className="icon" />
          <SearchOutlined className="icon" />
=======
          <ShoppingCartOutlined className="icon" />
          <Link
            to={`/product/${item._id}`}
            params={{product: item._id}}
            key={item._id}
            item={item}
          >
            <SearchOutlined className="icon" />
          </Link>
>>>>>>> 86fb10e980708f5c86484a3bb6aa7744fdef9fbe
          <FavoriteBorderOutlined className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
