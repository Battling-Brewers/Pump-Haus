import { Add, Remove } from "@mui/icons-material";
import React, {useEffect} from "react";
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../Utils/queries';
import { useStoreContext } from '../../Utils/GlobalState';
import { REMOVE_FROM_CART} from "../../Utils/actions";
import "./cart.css";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = (product) => {
  const [state, dispatch] = useStoreContext();
  const {cart} = state
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

useEffect(() => {
  if (data) {
    stripePromise.then((res) => {
      res.redirectToCheckout({ sessionId: data.checkout.session });
    });
  }
}, [data]);

const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      product: { ...data?.product, purchaseQuantity: -1 }
    });
  
}

function calculateTotal() {
  let sum = 0;
  state.cart.forEach((item) => {
    sum += item.price;
  });
  return sum.toFixed(2);
}

function submitCheckout() {
  const productIds = [];
  state.cart.forEach((item) => {
    for (let i = 0; i < item.purchaseQuantity; i++) {
      productIds.push(item._id);
    }
  });
  getCheckout({
    variables: { products: productIds },
  });
}


  const shippingCost = calculateTotal() > 100 ? 0 : 10;


  return (
    <div>
      <div className="cartWrapper">
        <h1 className="cartTitle">Your Cart</h1>
        <h3 className="shippingStatement">Shipping is <span>FREE</span> for all orders over $100!</h3>
        <div className="cartContainer">
          <div className="infoContainer">
            {cart.map((product) => (
            <div className="productContainer">
              <div className="detailContainer">
                <img src={`../images/${product.prodImage[0]}`} alt="products listed by id"/>
                <div className="details">
                  <div className="productName"><b>Product: </b>{product.prodName}</div>
                </div>
              </div>
              <div className="priceDetails">
                <div className="productAmtContainer">
                  <Add />
                  <div className="productAmt">{product.purchaseQuantity}</div>
                  <Remove onClick={removeFromCart} />
                </div>
                <div className="productPrice">
                  $ {product.price}
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="summaryContainer">
            <h1 className="orderTitle">Your Order</h1>
            <div className="summaryItem">
              <span>Subtotal: {}</span>
            </div>
            <div className="summaryItem">
              <span>Shipping: </span>
              <div>{shippingCost}</div>
            </div>
            <div className="summaryItem">
              <span>Tax: </span>
              <div>{}</div>
            </div>
            <div className="summaryItem">
              <span>Total: </span>
              <div>{calculateTotal()}</div>
            </div>
            <button onClick={submitCheckout} className="checkoutBtn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Cart;