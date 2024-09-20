// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// Create a slice of the state
export const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    value: 0,
  },
  reducers: {
    scroll_capture: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the actions
export const { scroll_capture } = scrollSlice.actions;

// Create the store
// we are bundling the state also in the scroll name from here.

export const store = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
  },
});
