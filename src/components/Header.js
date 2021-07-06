import React from "react";
import "./SASS/style.scss";

import Cart from "./Cart";
import { connect } from "react-redux";


const stateMapProps = (state) => ({
  UserCart: state.CartReducer,
});


function Header() {
  return (
    <header>
      <h2> OUR STORE </h2> 
        <Cart />
    </header>
  );
}


export default connect(stateMapProps)(Header);
