import Heading from "./components/heading/Heading";
import Board from "./components/board/Board";
import { useState } from "react";
function App() {
  const [board, setBoard] = useState<string[]>([
    "a",
    "",
    "d",
    "c",
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
    </div>
  );
}

export default App;
