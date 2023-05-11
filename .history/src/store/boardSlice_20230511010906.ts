import { createSlice } from "@reduxjs/toolkit";
import { words } from "../../words.json";
let randomWord = Math.floor(Math.random() * words.length);
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    position: 0,
    row: 0,

    word: words[randomWord].toUpperCase(),
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
      state.row += 1;
    },
    reset: (state) => ({
      ...state,
      board: Array(30).fill(""),
    }),
  },
});
export const { setBoard, increment, decrement, incrow } = boardSlice.actions;
export default boardSlice.reducer;
