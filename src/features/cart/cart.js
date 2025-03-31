import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const initialState = {
    cart: {},
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log(Object.keys(state.cart).includes(action.payload._id))
            if (Object.keys(state.cart).includes(action.payload._id)){
                state.cart[action.payload._id].count+=1
            }
            else{
            state.cart[action.payload._id] = {...action.payload, "count":1}
            }
        },
        removeOneUnitFromCart: (state, action)=>{
            if (Object.keys(state.cart).includes(action.payload._id) && state.cart[action.payload._id].count>1){    
                state.cart[action.payload._id].count-=1}

            else if(Object.keys(state.cart).includes(action.payload._id)){
                delete state.cart[action.payload._id]
            }
        },
        removeFromCart: (state, action) => {        
            if(Object.keys(state.cart).includes(action.payload._id)){
                delete state.cart[action.payload._id]
            }
            },
        
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeOneUnitFromCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
