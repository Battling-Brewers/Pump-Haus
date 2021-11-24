import React from 'react';
import ProductCard from '../ProductCard/index';
import './index.css';

const ProductList = () => {
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
            {popularProducts.map((item) => (
                <ProductCard item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default ProductList;