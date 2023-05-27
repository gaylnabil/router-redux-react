import { createSlice } from "@reduxjs/toolkit";
// import { clearProductSelected } from "./ProductSlice";
import { clearProductSelectedAndInitCounter } from "../actions/action";
// Initializes and returns the state of the service. This is used to determine how many entities are in the service
const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // Here we can define all actions
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },

    // Updates state in response to multiple actions. This is used to reduce the number of nodes
    multiple: (state, action) => {
      state.count *= Number(action.payload);
    },
    divide: (state, action) => {
      state.count /= Number(action.payload);
    },
    clearCounter: (state, action) => {
      state.count = 0;
    },
  },
  // extraReducers: Custom Action Reducer, means call Reducer from another Slice File.
  extraReducers: (builder) => {
    // type if ation named "product/clearProductSelected" in ProductSlice
    // builder.addCase(clearProductSelected.toString(), (state, action) => {
    //   state.count = 0;
    // });
    builder.addCase(clearProductSelectedAndInitCounter, (state, action) => {
      state.count = 0;
    });
  },
});

export const { increment, decrement, multiple, divide, clearCounter } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
