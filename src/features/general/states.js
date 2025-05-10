import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enableAddToCart: false,
    org_id: "",
    customer_email:"",
    signedIn: false
}
const changeStateSlice = createSlice({
name:"change",
initialState,
reducers:{
    setEnableAddToCart: (state)=>{
       state.enableAddToCart = true
    },
    disableAddToCart: (state)=>{
        state.enableAddToCart = false
    },
    setOrgId: (state, action)=>{
     state.org_id= action.payload
    },
    setCustomerEmail:(state, action)=>{
      state.customer_email = action.payload
    },
    setSignedInTrue:(state)=>{
        state.signedIn = true
    },
    setSignedInFalse:(state)=>{
        state.signedIn = false
    }
}
})

export const {setEnableAddToCart, disableAddToCart, setCustomerEmail, setOrgId, setSignedInTrue, setSignedInFalse} = changeStateSlice.actions;
export default changeStateSlice.reducer;