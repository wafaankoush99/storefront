import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";
const myApi = "https://api-server-0.herokuapp.com/products";

const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    categories: [],
    activeCategory: "none",
    products: [],
    productsList: [],
    details: [],
    cart: [],
  },
  reducers: {
    GET(state, action) {
      for (let category of action.payload) {
        if (!state.categories.includes(category.category)) {
          state.categories.push(category.category);
        }
      }

      state.products = [];
      state.products.push(...action.payload);
    },

    ACTIVE(state, action) {
      state.activeCategory = `${action.payload}`;
      let myproducts = [];
      state.products.forEach((product) => {
        if (product.category === action.payload) {
          myproducts.push(product);
        }
      });
      state.productsList = myproducts;
    },

    PUT(state, action) {
      state.cart.push(action.payload);

      state.productsList.forEach((prod) => {
        if (action.payload._id === prod._id) {
          prod.inventory--;
          prod.cartCount++;
        }
      });
    },

    PUT_REMOVE(state, action) {
      state.productsList.forEach((prod) => {
        if (action.payload._id === prod._id) {
          prod.inventory = prod.cartCount + prod.inventory;
          prod.cartCount = 0;
        }
      });
      let newCart = state.cart.filter((it) => {
        return it.item !== action.payload.name;
      });
      state.cart = [...newCart];
    },

    details(state, action) {
      let targetedProduct = state.productsList.find((item) => {
        return item._id === action.payload;
      });
      state.details = [];
      state.details.push(targetedProduct);
    },
  },
});

export const updateRemoteDataAfterDeleteFromCart =
  (id, inventory, cartCount) => (dispatch) => {
    superagent
      .put(`${myApi}/${id}`)
      .send({
        inventory: cartCount + inventory,
        cartCount: 0,
      })
      .then((res) => {
        dispatch(PUT_REMOVE(res.body));
      });
  };

export const updateRemoteData = (it) => (dispatch) => {
  superagent
    .put(`${myApi}/${it._id}`)
    .send({
      inventory: it.inventory - 1,
      cartCount: it.cartCount + 1,
    })
    .then((res) => {
      dispatch(PUT(res.body));
    });
};
export const getRemoteData = () => (dispatch) => {
  superagent.get(myApi).then((res) => {
    dispatch(GET(res.body));
  });
};
export default CategorySlice.reducer;

export const { GET, ACTIVE, PUT, PUT_REMOVE, details } = CategorySlice.actions;

