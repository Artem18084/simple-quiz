import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: false,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    getStart: (state) => {
      state.result = true;
    },
    getResult: (state) => {
      state.result = false;
    },
  },
});

export const { getResult, getStart } = resultSlice.actions;
export default resultSlice.reducer;