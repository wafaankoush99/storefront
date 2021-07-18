import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { connect } from "react-redux";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const StyledBadge = withStyles(() => ({
  badge: {
    display: "none",
  },
}))(Badge);

const mapStateToProps = (state) => ({
  UserCart: state.Category,
});


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Header(props) {
  return (
    <header>
      <h1 className="ourstore">OUR STORE</h1>
      <StyledBadge
        badgeContent={props.UserCart.cart.length}
        color="secondary"
        className="userCart"
      >
        <Cart />
      </StyledBadge>

      <Link to="/" className="homeBtn">
        <div className="homeIcon">
        <HomeIcon style={{ fontSize: 50 }} />{" "}


        </div>
      </Link>
    </header>
  );
}


export default connect(mapStateToProps)(Header);
