import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Header from "./components/Header";
import Bottom from "./components/Footer";
import Quiz from "./pages/Quiz";
import Slider from './components/Slider/index';
import Header from "./components/Cart/Header"; // shopping cart header
import Main from "./components/Cart/Main"; // Main section from shopping cart
import Basket from "./components/Cart/Basket"; // Customer basket from shopping cart
import data from "./components/Cart/data"; // data for placeholder products
import { useState } from "react";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function ShoppingCart () {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id )
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
    } else {
      setCartItems([...cartItems, {...products, qty: 1}])
    }
  }
  return (
    <div className="ShoppingCart">
      <Header></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd }cartItems={cartItems}></Basket>
      </div>
    </div>
  )
}


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Header />
              <Slider/>
              {/* <Switch>
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Quiz} />
              </Switch> */}
            <Bottom />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
