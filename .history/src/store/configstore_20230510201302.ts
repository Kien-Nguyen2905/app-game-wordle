import { boardSlice } from "./../../.history/src/store/boardSlice_20230510195438";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const store = configureStore({
  reducer{
     board: boardSlice
  },
});
export default store;
