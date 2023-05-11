import { createSlice } from "@reduxjs/toolkit";
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    position: 0,
    row: 0,
    correct: "SOUND",
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
    incrow: (state) => {
      state.row++;
    },
  },
});
export const { setBoard, increment, decrement, incrow } = boardSlice.actions;
export default boardSlice.reducer;
