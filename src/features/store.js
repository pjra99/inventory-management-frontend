import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart"; // Adjust path if needed

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
