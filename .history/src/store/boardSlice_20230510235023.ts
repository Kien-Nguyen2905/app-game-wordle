import { createSlice } from "@reduxjs/toolkit";
import wordLists from "../../words.json";
let randomWord = Math.floor(Math.random() * wordLists.words.length);
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    position: 0,
    row: 0,
    word: wordLists.words[randomWord],
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
