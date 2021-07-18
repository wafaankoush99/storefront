import superagent from "superagent";

const myApi = "https://nihad-api-server.herokuapp.com/product";

export const getRemoteData = () => (dispatch) => {
  superagent.get(myApi).then((res) => {
    dispatch(getAction(res.body));
  });
};

export const updateRemoteData = (it) => (dispatch) => {
  console.log(it);
  superagent
    .put(`${myApi}/${it._id}`)
    .send({
      inventory: it.inventory - 1,
      cartCount: it.cartCount + 1,
    })
    .then((res) => {
      dispatch(putAction(res.body));
    });
};

export const updateRemoteDataAfterDeleteFromCart =
  (id, inventory, cartCount) => (dispatch) => {
    superagent
      .put(`${myApi}/${id}`)
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
