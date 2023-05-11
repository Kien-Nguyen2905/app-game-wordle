import { createSlice } from "@reduxjs/toolkit";
import { words } from "../../words.json";
let randomWord = Math.floor(Math.random() * words.length);
const initialState = {
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
};
export const boardSlice = createSlice({
  name: "board",
  initialState,
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
    reset: (state) => {
      state.board = initialState.board;
      state.position = initialState.position;
      state.row = initialState.row;
      state.word = initialState.word;
    },
    resetRandomWord: (state) => {
      let newRandomWord = Math.floor(Math.random() * words.length);
      state.word = words[newRandomWord].toUpperCase();
    },
  },
});
export const { setBoard, increment, decrement, incrow, reset } =
  boardSlice.actions;
export default boardSlice.reducer;
