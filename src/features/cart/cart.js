import { createSlice } from "@reduxjs/toolkit";
import { act, startTransition } from "react";

const initialState = {
    cart: {},
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addLotToCard:(state, action)=>{
            console.log("Add")
            if (Object.keys(state.cart).includes(action.payload._id)){
                state.cart[action.payload._id].count+=Math.floor(action.payload.min_lot_size)
            }
            else{
            state.cart[action.payload._id] = {...action.payload, "count":Math.floor(action.payload.min_lot_size)}
            }
        },
        removeLotFromCart:(state, action)=>{
            // console.log(action.payload.count)
            if (Object.keys(state.cart).includes(action.payload._id) && state.cart[action.payload._id].count >= action.payload.min_lot_size){
                state.cart[action.payload._id].count-=Math.floor(action.payload.min_lot_size)
            }
            // else{
            // state.cart[action.payload._id] = {...action.payload, "count":Math.floor(action.payload.min_lot_size)}
            // }
        },
        addOneUnitToCart: (state, action) => {
            console.log(Object.keys(state.cart).includes(action.payload._id))
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
        //removes the whole item from the cart
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

export const { addLotToCard, removeLotFromCart, addOneUnitToCart, removeOneUnitFromCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
