import Heading from "./components/heading/Heading";
import Board from "./components/board/Board";
import { useState } from "react";
function App() {
  const [board, setBoard] = useState([
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
  ]);
  return (
    <div className="container">
      <Heading></Heading>
      <Board></Board>
    </div>
  );
}

export default App;
