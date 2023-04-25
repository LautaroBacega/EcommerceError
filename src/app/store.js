import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import authReducer from "../features/user/userSlice"
import productReducer from "../features/products/productSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,

    counter: counterReducer,
  },
});
