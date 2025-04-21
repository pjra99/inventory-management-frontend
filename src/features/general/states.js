import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enableAddToCart: false,
    org_id: "",
    customer_id:"",
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
    setCustomerId:(state, action)=>{
      state.customer_id = action.payload
    },
    setSignedInTrue:(state)=>{
        state.signedIn = true
    },
    setSignedInFalse:(state)=>{
        state.signedIn = false
    }
}
})

export const {setEnableAddToCart, disableAddToCart, setCustomerId, setOrgId, setSignedInTrue, setSignedInFalse} = changeStateSlice.actions;
export default changeStateSlice.reducer;