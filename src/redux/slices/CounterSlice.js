import { createSlice } from "@reduxjs/toolkit";

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
