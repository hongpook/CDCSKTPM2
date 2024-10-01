import { configureStore } from "@reduxjs/toolkit";
import CartItem from "./slice/cartItem";

export const store = configureStore({
  reducer: {
    cart: CartItem,
  },
});
