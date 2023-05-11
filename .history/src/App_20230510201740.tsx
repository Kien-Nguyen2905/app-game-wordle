import Heading from "./components/heading/Heading";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const board = useSelector((state) => state.board.board);
  return (
    <div className="container">
      <Heading></Heading>
      <Board board={board} />
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
