import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../futures/counter/counterSlice";
import colorReducer from "../futures/color/colorSlice";
import resultReducer from "../futures/result/resultSlice";
import dataReducer from "../futures/data/dataSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    color: colorReducer,
    result: resultReducer,
    data: dataReducer,
  },
});
