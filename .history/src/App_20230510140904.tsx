import Heading from "./components/heading/Heading";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import { useState } from "react";
function App() {
  const [board, setBoard] = useState<string[]>([
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
  ]);
  return (
    <div className="container">
      <Heading></Heading>
      <Board board={board} />
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
