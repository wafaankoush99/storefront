import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Categories";
import Products from "./components/Products";
import Product_Details from "./components/productDetails";
import ShoppingCart from "./components/shoppingCart";

const App = (props) => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Category />
          <Products />
        </Route>

        <Route exact path="/products/details">
          <Product_Details />
        </Route>

        <Route exact path="/checkout">
          <ShoppingCart />
        </Route>
      </Switch>

      <div>
        <Footer />
      </div>
    </>
  );
};
export default App;
