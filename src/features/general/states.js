import { createSlice } from "@reduxjs/toolkit";

const enableAddToCartSlice = createSlice({
name:"enableAddToCart",
initialState: false,
reducers:{
    changeState: (state)=>{
        console.log("Here",state)
        return !state
    }
}
})

export const {changeState} = enableAddToCartSlice.actions;
export default enableAddToCartSlice.reducer;