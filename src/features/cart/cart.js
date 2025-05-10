import { createSlice } from "@reduxjs/toolkit";

// Utility to deep clone an object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const initialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addLotToCart: (state, action) => {
      console.log("Add");
    //   delete state.cart[action.payload.availability];

      if (Object.keys(state.cart).includes(action.payload._id)) {
        state.cart[action.payload._id].count += Math.floor(action.payload.min_lot_size);
      } else {
        state.cart[action.payload._id] = {
          ...deepClone(action.payload),
          count: Math.floor(action.payload.min_lot_size),
        };
      }
    },

    removeLotFromCart: (state, action) => {
      if (Object.keys(state.cart).includes(action.payload._id) && state.cart[action.payload._id].count >= action.payload.min_lot_size) {
        state.cart[action.payload._id].count -= Math.floor(action.payload.min_lot_size);
      }
    },

    addOneUnitToCart: (state, action) => {
      delete state.cart[action.payload.availability];

      if (Object.keys(state.cart).includes(action.payload._id)) {
        state.cart[action.payload._id].count += 1;
      } else {
        state.cart[action.payload._id] = {
          ...deepClone(action.payload),
          count: 1,
        };
      }
    },

    removeOneUnitFromCart: (state, action) => {
      if (Object.keys(state.cart).includes(action.payload._id) && state.cart[action.payload._id].count > 1) {
        state.cart[action.payload._id].count -= 1;
      } else if (Object.keys(state.cart).includes(action.payload._id)) {
        delete state.cart[action.payload._id];
      }
    },

    // Removes the whole item from the cart
    removeFromCart: (state, action) => {
      if (Object.keys(state.cart).includes(action.payload._id)) {
        delete state.cart[action.payload._id];
      }
    },

    clearCart: (state) => {
      state.cart = {}; // Reset to empty object (not array)
    },
  },
});

export const {
  addLotToCart,
  removeLotFromCart,
  addOneUnitToCart,
  removeOneUnitFromCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
