import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/CounterSlice";
import { productReducer } from "./slices/ProductSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    productStore: productReducer,
  },
});

console.log("store: ", store);
console.log("store.getState() : ", store.getState());
