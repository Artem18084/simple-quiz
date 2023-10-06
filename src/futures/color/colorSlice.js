import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    green: (state) => {
      state.color = true;
    },
    red: (state) => {
      state.color = false;
    },
  },
});

export const { green, red } = colorSlice.actions;
export default colorSlice.reducer;
