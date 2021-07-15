import { createStore, combineReducers, applyMiddleware } from "redux";
import CatReducer from "./CategoryStore";
import ProductReducer from "./ProductsStore";
import thunk from "./thunkMiddleWare";
import CartReducer from "./CartReducer"

let reducers = combineReducers({
  CatReducer,
  ProductReducer,
  CartReducer
});

const myStore = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default myStore();
