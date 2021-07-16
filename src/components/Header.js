import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";


function Header(props) {
  return (
    <header>
      <h1> OUR STORE </h1>
        <Cart />
    </header>
  );
}

const stateMapProps = (state) => ({
  UserCart: state.CartReducer,
});

export default connect(stateMapProps)(Header);
