import { createSlice } from "@reduxjs/toolkit";
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    count: 0,
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
    counter: (state, action) => ({
      ...state,
      count: action.payload + 1,
    }),
  },
});
export const { setBoard, counter } = boardSlice.actions;
export default boardSlice.reducer;
