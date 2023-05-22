import Heading from "./components/heading/Heading";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import Guide from "./modules/guide/Guide";
import { Iglobal } from "./interface";
import { useSelector } from "react-redux";
function App() {
  const board = useSelector((state: Iglobal) => state.board.board);
  return (
    <div className="container">
      <Heading></Heading>
      <Board board={board} />
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
