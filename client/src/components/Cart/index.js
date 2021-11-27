import React from "react";
import Product from "./Product";

function ShoppingCart () {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find(x => x.id === product.id )
      if(exist) {
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
      } else {
        setCartItems([...cartItems, {...products, qty: 1}])
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
      }
    }
    return (
      <div className="ShoppingCart">
        <Header cartItemCount={cartItems.length}></Header>
        <div className="row">
          <Main onAdd={onAdd} products={products}></Main>
          <Basket onAdd={onAdd } onRemove={onRemove} cartItems={cartItems}></Basket>
        </div>
      </div>
    )
  }

  export default function Main(props) {
    const {products , onAdd} = props;
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    )
}