import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";

export const ProductStore = configureStore({
  reducer: {
    prodReducer: ProductReducer,
  },
});
