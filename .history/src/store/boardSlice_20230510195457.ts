import { createSlice } from "@reduxjs/toolkit";
export const boardSlice =createSlice({
    name:"board",
    initialState{
       board: = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
    }
})