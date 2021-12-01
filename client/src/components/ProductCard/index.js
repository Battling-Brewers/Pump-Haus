import React from "react";
import "./productcard.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {  Link } from "react-router-dom";
import { ADD_TO_CART } from "../../Utils/actions";
import { useStoreContext } from "../../Utils/GlobalState";

const ProductCard = ({ item }) => {
  const [state, dispatch] = useStoreContext();
  let priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  let price = priceFormat.format(item.price);

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: { ...item, purchaseQuantity: 1 },
    });
  };

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
          <ShoppingCartOutlined onClick={addToCart} className="icon" />
          <Link
            to={`/product/${item._id}`}
            params={{product: item._id}}
            key={item._id}
            item={item}
          >
            <SearchOutlined className="icon" />
          </Link>
          <FavoriteBorderOutlined className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
