import React from "react";

export default function Basket(props) {
    const {cartItems , onAdd} = props;
    return (
        <aside className="block col-1">
            <h2>Your Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
        </aside>
    )
}