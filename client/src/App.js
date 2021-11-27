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
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Bottom from "./components/Footer";
import Quiz from "./components/Quiz";
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import Main from "./components/Cart/Main"; // Main section from shopping cart
import Basket from "./components/Cart/Basket"; // Customer basket from shopping cart
import data from "./components/Cart/data"; // data for placeholder products


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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Header />
              <Switch>
                {/* <Route exact path="/" component={Quiz} /> */}
              </Switch>
              {/* <Slider/> */}
              {/* <ProductList/> */}
              {/* <Signup /> */}
              <Main />
            <Bottom />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
