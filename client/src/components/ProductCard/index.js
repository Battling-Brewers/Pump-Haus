import React from "react";
import './productcard.css';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const ProductCard = ({ item }) => {
    return (
        <div className="card-container">
            <div className="circle"></div>
            <img src={item.img} alt="product item"/>
            <div className="info">
                <ShoppingCartOutlined className="icon"/>
                <SearchOutlined className="icon"/>
                <FavoriteBorderOutlined className="icon"/>
            </div>
        </div>
    )
}

export default ProductCard;