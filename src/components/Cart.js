import React from "react";
import { connect } from "react-redux";
import { remove } from "../store/CartReducer";

/*materials*/
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import BackspaceIcon from "@material-ui/icons/Backspace";

const stateMapProps = (state) => ({
  UserCart: state.CartReducer,
});

const dispatchToProps = { remove };

const Cart = (props) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>

          <div className="myCart">
            <Button  {...bindTrigger(popupState)}>
              CART ({props.UserCart.cart.length})
            </Button>
          </div>

          <Menu {...bindMenu(popupState)}>
            {props.UserCart.cart.map((it) => {

              {
                return (
                  <>
                    <MenuItem>

                      {it.name} &nbsp;{" "}
                      <BackspaceIcon onClick={() => props.remove(it)} />

                    </MenuItem>
                  </>
                );
              }
            })}
          </Menu>

        </React.Fragment>
      )}
    </PopupState>
  );
};


export default connect(stateMapProps, dispatchToProps)(Cart);
