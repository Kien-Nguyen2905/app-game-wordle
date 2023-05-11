import { createSlice } from "@reduxjs/toolkit";
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    position: 0,
    row: 0,
    board: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  reducers: {
    setBoard: (state, action) => ({
      ...state,
      board: action.payload,
    }),
    increment: (state) => {
      state.position++;
    },
    decrement: (state) => {
      state.position--;
    },
    row: (state) => {
      state.row++;
    },
  },
});
export const { setBoard, increment, decrement } = boardSlice.actions;
export default boardSlice.reducer;
