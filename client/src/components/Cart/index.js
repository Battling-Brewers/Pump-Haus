import { Add, Remove } from "@mui/icons-material";
import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
import "./cart.css";

// const stripePromise = loadStripe('STRIPE_API_KEY_HERE');

const Cart = () => {
  const cart = [
    {
      id: 1,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://www.pngarts.com/files/2/Arnold-Schwarzenegger-PNG-Download-Image.png",
    },
    {
      id: 2,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://www.pngarts.com/files/2/Arnold-Schwarzenegger-PNG-Image.png",
    },
    {
      id: 3,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://www.pngarts.com/files/6/Body-Fitness-PNG-Pic.png",
    },
    {
      id: 4,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://www.pngarts.com/files/6/Fitness-Silhouette-PNG-Image-Background.png",
    },
    {
      id: 5,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://www.pngarts.com/files/6/Female-Fitness-Transparent-Image.png",
    },
    {
      id: 6,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
      id: 7,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://www.pngall.com/wp-content/uploads/4/Arnold-Schwarzenegger-Bodybuilding-PNG-HD-Image.png",
    },
    {
      id: 8,
      prodName: "Daniel",
      price: 10,
      quantity: 3,
      img: "https://www.pngarts.com/files/2/Arnold-Schwarzenegger-Free-PNG-Image.png",
    },
  ];
  return (
    <div>
      <div className="cartWrapper">
        <h1>Your Cart</h1>
        <div className="cartContainer">
          <div className="infoContainer">
            {cart.map((product) => (
            <div className="productContainer">
              <div className="detailContainer">
                <img src={product.img} alt="products listed by id"/>
                <div className="details">
                  <div className="productName"><b>Product: </b>{product.prodName}</div>
                  <div className="productId">{product.id}</div>
                </div>
              </div>
              <div className="priceDetails">
                <div className="productAmtContainer">
                  <Add />
                  <div className="productAmt">{product.quantity}</div>
                  <Remove />
                </div>
                <div className="productPrice">
                  $ {product.price * product.quantity}
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="summaryContainer">
            <h1>Order Summary</h1>
            <div className="summaryItem">
              <span>Subtotal</span>
              <div className="">*Subtotal Amount*</div>
            </div>
            <div className="summaryItem">
              <span>Estimated Shipping</span>
              <div className="">*Fixed amount?</div>
            </div>
            <div className="summaryItem">
              <span>Discounts? Promos?</span>
              <div className="">$ -.01</div>
            </div>
            <div className="summaryItem">
              <span>Total</span>
              <div className="">$1,000,000.00 please pay us</div>
            </div>
            <button className="checkoutBtn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;