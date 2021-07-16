import superagent from "superagent";
const api = "https://api-server-0.herokuapp.com/products";

export const getRemoteData = () => (dispatch) => {
  superagent.get(api).then((res) => {
    dispatch(getAction(res.body));
  });
};


export const updateRemoteData = (it) => (dispatch) => {
  console.log(it);
  superagent
    .put(`${api}/${it._id}`)
    .send({
      inventory: it.inventory - 1,
      cartCount: it.cartCount + 1,
    })
    .then((res) => {
      dispatch(putAction(res.body));
    });
};

export const updateRemoteDataAfterDeleteFromCart =
  (id, inventory, cartCount) => (dispatch, state) => {
    superagent
      .put(`${api}/${id}`)
      .send({
        inventory: cartCount + inventory,
        cartCount: 0,
      })
      .then((res) => {
        dispatch(putActionToRemoveFromCart(res.body));
      });
  };

export const getAction = (payload) => {
  return {
    type: "GET",
    payload: payload,
  };
};

export const putAction = (payload) => {
  return {
    type: "PUT",
    payload: payload,
  };
};

export const putActionToRemoveFromCart = (payload) => {
  return {
    type: "PUT_REMOVE",
    payload: payload,
  };
};
