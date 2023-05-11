import Heading from "./components/heading/Heading";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import Popup from "./utils/Popup";
import { Iglobal } from "./interface";
import { useSelector } from "react-redux";
function App() {
  const board = useSelector((state: Iglobal) => state.board.board);
  return (
    <div className="container">
      <Heading></Heading>
      <Board board={board} />
      <Keyboard></Keyboard>
      <Popup open={false}></Popup>
    </div>
  );
}

export default App;
