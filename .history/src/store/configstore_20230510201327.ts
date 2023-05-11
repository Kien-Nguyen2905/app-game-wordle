import boardSlice from "./boardSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
const reducer = combineReducers({
  board: boardSlice,
});
const store = configureStore({
  reducer,
});
export default store;
