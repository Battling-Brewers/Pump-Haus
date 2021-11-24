import React from "react";
import { NavItem } from "react-materialize";
import './index.css';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const productCard = ({ item }) => {
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

export default productCard;