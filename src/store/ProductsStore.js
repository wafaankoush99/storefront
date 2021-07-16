let initialProductState = {
  products: [],
  productsList: [],
};

const ProductReducer = (state = initialProductState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET":
      return {
        products: payload,
        productsList: [],
      };

    case "PUT":
      let newList = state.productsList.map((product) => {
        if (payload.id === product.id) {
          product.inventory--;
          product.cartCount++;
        }
        return product;
      });

      return { ...state, productsList: newList };

    case "ACTIVE":
      state.productsList = [];
      state.products.forEach((product) => {
        if (product.category === payload) {
          state.productsList.push(product);
        }
      });
      return { ...state };

    case "PUT_REMOVE":
      let updateInventory = state.productsList.map((product) => {
        if (payload.id === product.id) {
          product.inventory = product.cartCount + product.inventory;
          product.cartCount = 0;
        }
        return product;
      });
      return { ...state, productsList: updateInventory };

    default:
      return state;
  }
};

export default ProductReducer;
