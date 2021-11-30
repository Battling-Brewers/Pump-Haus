import { Add, ConstructionOutlined, Remove } from "@mui/icons-material";
import React, {useEffect} from "react";
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../Utils/queries';
import { useStoreContext } from '../../Utils/GlobalState';
import { REMOVE_FROM_CART, CLEAR_CART } from "../../Utils/actions";
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




function submitCheckout() {
  const productIds = [];
  console.log(cart);
  state.cart.forEach((item) => {
    for (let i = 0; i < item.purchaseQuantity; i++) {
      console.log(item._id);
      productIds.push(item._id);
    }
  });
  console.log(productIds)
  getCheckout({
    variables: { products: productIds },
  });
}
  
  const subtotal = 0;
  const taxAmount = subtotal * 0.08;
  const shippingCost = subtotal > 100 ? 0 : 10;
  const orderTotal = subtotal + taxAmount + shippingCost;

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
                <img src={product.img} alt="products listed by id"/>
                <div className="details">
                  <div className="productName"><b>Product: </b>{product.prodName}</div>
                  <div className="productId">{product.id}</div>
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
              <span>Subtotal: {subtotal}</span>
            </div>
            <div className="summaryItem">
              <span>Shipping: </span>
              <div>{shippingCost}</div>
            </div>
            <div className="summaryItem">
              <span>Tax: </span>
              <div>{taxAmount}</div>
            </div>
            <div className="summaryItem">
              <span>Total: </span>
              <div>{orderTotal}</div>
            </div>
            <button onClick={submitCheckout} className="checkoutBtn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Cart;