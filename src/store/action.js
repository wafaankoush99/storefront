import superagent from "superagent";

const myApi = "https://nihad-api-server.herokuapp.com/product";

export const getRemoteData = () => (dispatch, state) => {
  superagent.get(myApi).then((res) => {
    dispatch(getAction(res.body));
  });
};


export const updateRemoteData = (item) => (dispatch, state) => {
  superagent
    .put(`${myApi}/${item._id}`)
    .send({
      quantity: item.quantity - 1,
      cartCount: item.cartCount + 1,
    })
    .then((res) => {
      dispatch(putAction(res.body));
    });
};

export const updateRemoteDataAfterDeleteFromCart =
  (id, quantity, cartCount) => (dispatch, state) => {
    superagent
      .put(`${myApi}/${id}`)
      .send({
        quantity: cartCount + quantity,
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


