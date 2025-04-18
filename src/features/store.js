import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart"; 
import enableAddToCartReducer from "./general/states";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        change: enableAddToCartReducer,
    },
});

export default store;
       