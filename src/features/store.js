import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart"; 
import changeStateReducer from "./general/states";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        change: changeStateReducer,
    },
});

export default store;
       