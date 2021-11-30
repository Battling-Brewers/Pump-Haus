import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import "./cart.css";
import ProductCard from "../ProductCard";
// const stripePromise = loadStripe('STRIPE_API_KEY_HERE');
// const removeFromCart = (removedProduct) => {
//   Cart(Cart.filter(products => props !== removedProduct))
// }
const Cart = (props) => {
  console.log(props)
  return (
    <div className="Cart">
      
      <h1>Your Cart</h1>
      {/* {props.map((products, index) => (
        <div className="product" key={index}>
          <h3>{props.prodName}</h3>
          <img src={props.img} alt={props.prodName}/>
          <h4>{props.price}</h4>
          <h4>{props.quantity}</h4> */}
          {/* <button onClick={() => removeFromCart(props)}>Remove from Cart</button> */}
        {/* </div>
      ))} */}

    </div>
  
  );
};

export default Cart;