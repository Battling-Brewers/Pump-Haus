import React from "react";

export default function Header(props) {
    const {cartItemsCount} = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Your Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    
                    Cart { ' '}
                    {cartItemsCount? (
                        <button className="badge">{cartItemsCount}</button>
                    ) : (
                        ''
                    )}
            </a>{ ' '}
            <a href="/sign"></a>
            </div>
        </header>
    );
}