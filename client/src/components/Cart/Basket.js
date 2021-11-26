import React from "react";

export default function Basket(props) {
    const {cartItems , onAdd , onRemove} = props;
    const itemsPrice = cartItems.reduce((total, current) => total + current.price * current.qty, 0);
    const taxAmount = itemsPrice * 0.08;
    const shippingCost = itemsPrice > 100 ? 0 : 15;
    const cartTotal = itemsPrice + taxAmount + shippingCost;
    return (
        <aside className="block col-1">
            <h2>Your Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    
                    <div className="col-2">
                        <button onClick={() =>onAdd(item)} className="add">+</button>
                        <button onClick={() =>onRemove(item)} className="add">-</button>
                    </div>

                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div>
                    <div className="col-2">Items Subtotal</div>
                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                </div> 
                <div>
                    <div className="col-2">Tax</div>
                    <div className="col-1 text-right">${taxAmount.toFixed(2)}</div>
                </div> 
                <div>
                    <div className="col-2">Shipping</div>
                    <div className="col-1 text-right">${shippingCost.toFixed(2)}</div>
                </div> 
                <div>
                    <div className="col-2"><strong>Total</strong></div>
                    <div className="col-1 text-right"><strong>${cartTotal.toFixed(2)}</strong></div>
                </div>
                <hr></hr> 
                <div className="row">
                    <button onClick={() => alert('Are you ready to checkout?')}>
                        Checkout 
                    </button>
                    {/* At this point, we can connect to the payment processor after the customer has acknowledged the alert. */}
                </div>
                </>
            )}
        </aside>
    )
}