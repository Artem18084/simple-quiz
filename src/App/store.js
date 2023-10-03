import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../futures/counter/counterSlice";
import colorReducer from "../futures/color/colorSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer,
  },
});
