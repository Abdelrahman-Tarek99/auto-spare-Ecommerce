import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthSlice";
import ProductsReducer from "./products/ProductsSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
  },
});

export default store;