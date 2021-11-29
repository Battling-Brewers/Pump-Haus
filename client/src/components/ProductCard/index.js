import React from "react";
import './productcard.css';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const ProductCard = ({ item }) => {
    return (
        <div className="card-container">
            <div className="circle"></div>
            <img src={item.prodImages[0]} alt="product item"/>
            <div className="info">
                {item.prodName}
                {item.prodDescrip}
                {item.price}
                {item.quantity}
                {item.tags[0].tagName}
                <ShoppingCartOutlined className="icon"/>
                <SearchOutlined className="icon"/>
                <FavoriteBorderOutlined className="icon"/>
            </div>
        </div>
    )
}

export default ProductCard;