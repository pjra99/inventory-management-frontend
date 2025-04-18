import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enableAddToCart: false,
    org_id: "",
    customer_id:""
}
const changeStateSlice = createSlice({
name:"change",
initialState,
reducers:{
    enableAddToCart: (state)=>{
       state.enableAddToCart = true
    },
    disableAddToCart: (state)=>{
        state.enableAddToCart = false
    },
    setOrgId: (state, action)=>{
     state.org_id= action.payload
    },
    setCustomerId:(state, action)=>{
      state.customer_id = action.payload
    }
}
})

export const {enableAddToCart, disableAddToCart, setCustomerId, setOrgId} = changeStateSlice.actions;
export default changeStateSlice.reducer;