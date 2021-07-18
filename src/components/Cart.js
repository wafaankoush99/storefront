import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateRemoteDataAfterDeleteFromCart } from "../store/CategoryStore";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import BackspaceIcon from "@material-ui/icons/Backspace";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = () => {
  const state = useSelector((state) => {
    return {
      UserCart: state.Category,
    };
  });

  const dispatch = useDispatch();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <div className="myCart" >
            <Button variant="contained" color="info" {...bindTrigger(popupState)}>
              CART ({state.UserCart.cart.length})
            </Button>
          </div>

          <Menu {...bindMenu(popupState)}>
            {state.UserCart.cart.map((it) => {
              {
                return (
                  <>
                    <MenuItem>
                      {it.item} &nbsp;{" "}
                      <BackspaceIcon
                        onClick={() =>
                          dispatch(
                            updateRemoteDataAfterDeleteFromCart(
                              it._id,
                              it.inventory,
                              it.cartCount
                            )
                          )
                        }
                      />
                    </MenuItem>
                  </>
                );
              }
            })}

            <Link to="/checkout">
              Checkout
              <ShoppingCartIcon />
            </Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default Cart;
