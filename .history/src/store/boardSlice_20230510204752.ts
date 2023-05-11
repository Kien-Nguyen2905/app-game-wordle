import { createSlice } from "@reduxjs/toolkit";
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    position: 0,
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
    position:++
    }),
  },
});
export const { setBoard, counter } = boardSlice.actions;
export default boardSlice.reducer;
