let myCart = {
    cart: [],
  };
  
  const CartReducer = (state = myCart, action) => {
    let { type, payload } = action;
    let myNewCart = [];

    switch (type) {
      case "PUT":
        if (!state.cart.includes(payload)) {
          myNewCart = {...state, cart: myNewCart};

        //   state.cart.push(payload);
        //   payload.count = 1;
        // } else if (payload.quantity > 0) {
        //   state.cart.push(payload);
        //   payload.count++;
        }
        return { ...state };
  
      case "PUT_REMOVE":
        let newCart = state.cart.filter((item) => {
          return item.name !== payload.name;
        });
  
        return { ...state, cart: newCart };
  
      default:
        return state;
    }
  };
  
  // export const remove = (payload) => {
  //   return {
  //     type: "RemoveItem",
  //     payload: payload,
  //   };
  // };
  export default CartReducer;
  