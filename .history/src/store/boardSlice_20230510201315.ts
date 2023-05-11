import { createSlice } from "@reduxjs/toolkit";
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: [
      "H",
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
  },
});
export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer;
