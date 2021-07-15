let productState = {
  products: [],
  listOfProducts: [],
};

const ProductReducer = (state = productState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET":
      return {
        product: payload,
        listOfProducts: [],
      };


    case "PUT":
      let newList = state.listOfProducts.map((product) => {
        if (payload.name === product.name) {
          if (payload.quantity > 0) {
            product.quantity--;
            product.cartCount++;
          }
        }
        return product;
      });

      return { ...state, listOfProducts: newList };


    case "ACTIVE":
      state.listOfProducts = [];
      state.products.forEach(product => {
        if (product.category === payload) {
          state.listOfProducts.push(product);
        }
      })
      // let updateInventory = state.listOfProducts.map((product) => {
      //   if (payload.name === product.name) {
      //     product.quantity = product.quantity + product.count;
      //   }
      //   return product;
      // });

      return { ...state };


    // return {
    //   products: state.products,
    //   listOfProducts: state.listOfProducts
    // };

    case 'PUT_REMOVE':
      let updateInventory = state.listOfProducts.map(product => {
        if (payload.name === product.name) {
          product.quantity = product.cartCount + product.updateInventory;
          product.cartCount = 0;
        }
        return product;
      })

      return { ...state, listOfProducts: updateInventory }

    default:
      return state;
  }
};

export const addToMyCart = (payload) => {
  return {
    type: "addToMyCart",
    payload: payload,
  };
};

export default ProductReducer;


// let initialProductState = {
//   products: [],
//   productsList: [],
// };

// const ProductReducer = (state = initialProductState, action) => {
//   let { type, payload } = action;

//   switch (type) {
//     case "GET":
//       return {
//         products: payload,
//         productsList: [],
//       };

//     case "PUT":
//       let newList = state.productsList.map((product) => {
//         if (payload._id === product._id) {
//           product.inventoryCount--;
//           product.cartCount++;
//         }
//         return product;
//       });

//       return { ...state, productsList: newList };

//     case "ACTIVE":
//       state.productsList = [];
//       state.products.forEach((product) => {
//         if (product.category === payload) {
//           state.productsList.push(product);
//         }
//       });
//       return { ...state };

//     case "PUT_REMOVE":
//       let updateInventory = state.productsList.map((product) => {
//         if (payload._id === product._id) {
//           product.inventoryCount = product.cartCount + product.inventoryCount;
//           product.cartCount = 0;
//         }
//         return product;
//       });
//       return { ...state, productsList: updateInventory };

//     default:
//       return state;
//   }
// };

// export default ProductReducer;
