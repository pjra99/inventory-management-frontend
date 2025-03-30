import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload);
            state.cart = JSON.parse(JSON.stringify(state.cart));
        },
        
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
