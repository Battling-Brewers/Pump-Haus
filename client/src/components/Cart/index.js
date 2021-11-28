import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
import CartItem from "../CartItem";
import "./cart.css";

// const stripePromise = loadStripe('STRIPE_API_KEY_HERE');

const Cart = () => {
  return (
    <div>
      <div className="cartWrapper">
        <h1>Your Cart</h1>
      </div>
      <div className="cartContainer">
        <div className="infoContainer">
          {/* {state.cart.map((item) => (<CartItem key={item._id} item={item} />))} */}
        </div>
        <div className="summaryContainer">
          <h1>Order Summary</h1>
          <div className="summaryItem"></div>
          <div className="summaryItem"></div>
          <div className="summaryItem"></div>
          <div className="summaryItem"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;