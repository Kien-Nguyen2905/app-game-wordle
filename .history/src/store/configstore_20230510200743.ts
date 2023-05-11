import { boardSlice } from "./../../.history/src/store/boardSlice_20230510195438";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
const reducer = combineReducers({
  board: boardSlice,
});
const store = configureStore({
  reducer,
});
export default store;
