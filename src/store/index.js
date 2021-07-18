import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./CategoryStore";

let reducers = combineReducers({
  Category: CategorySlice,
});






const myStore = configureStore({ reducer: reducers });

export default myStore;


