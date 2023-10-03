import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    green: (state) => {
      state = true;
    },
    red: (state) => {
      state = false;
    },
  },
});

export const { green, red } = colorSlice.actions;
export default colorSlice.reducer;
