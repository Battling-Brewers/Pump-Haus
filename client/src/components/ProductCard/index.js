import React from "react";
import './productcard.css';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const ProductCard = ({ item }) => {
    
    let imgSrc = `/images/${item.prodImage[0]}`
    console.log(imgSrc)
    return (
        <div className="card-container">
            <div className="circle"></div>
            <img className="img1" src={`/images/${item.prodImage[0]}`} alt="product item"/>
            <img className="img2" src={`/images/${item.prodImage[1]}`} alt="product item"/>
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