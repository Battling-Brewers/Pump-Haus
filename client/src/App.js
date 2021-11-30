import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Quiz from "./pages/Quiz";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Bottom from "./components/Footer";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import { StoreProvider } from './Utils/GlobalState';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider >
          <Elements stripe={stripePromise}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/products" component={Shop} />
              
              <Route exact path="/cart" component={CartPage} />
             
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/product/:_id" component={SingleProduct} />
            </Switch>
            <Bottom />
            </Elements>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
