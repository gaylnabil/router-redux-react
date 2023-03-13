import { createSlice } from "@reduxjs/toolkit";

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
      state.count = state.count * Number(action.payload);
    },
    divide: (state, action) => {
      state.count = state.count / Number(action.payload);
    },
  },
});

export const { increment, decrement, multiple, divide } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
