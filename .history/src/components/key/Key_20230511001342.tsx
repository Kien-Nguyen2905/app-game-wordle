import React from "react";
import { useDispatch } from "react-redux";
import { Iglobal } from "../../interface";
import { useSelector } from "react-redux";
import { decrement, increment, incrow, setBoard } from "../../store/boardSlice";
interface Ikey {
  letter?: string;
}
const Key: React.FC<Ikey> = ({ letter = "" }) => {
  const board = useSelector((state: Iglobal) => state.board.board);
  const position = useSelector((state: Iglobal) => state.board.position);
  const row = useSelector((state: Iglobal) => state.board.row);
  const currentRow = Math.floor(position / 5);
  const dispatch = useDispatch();
  let checkWord: string = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`;
  const handleLetter = () => {
    if (position >= 30) return;
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increment());
  };
  const handleEnter = () => {
    if (position % 5 === 0 && position !== 0) {
      dispatch(incrow());
    }
  };
  const handleBack = () => {
    if (position <= 0) return;
    if (Math.floor((position - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decrement());
  };
  if (letter === "M") {
    return (
      <>
        <div className="text-#414a5e flex h-[40px] flex-1 cursor-pointer select-none items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-2 text-sm font-bold hover:bg-slate-400">
          {letter}
        </div>
        <div
          className="text-#414a5e flex h-[40px] flex-1 cursor-pointer select-none items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-2 text-sm font-bold hover:bg-slate-400"
          onClick={handleEnter}
        >
          Enter
        </div>
      </>
    );
  }
  if (letter === "Back") {
    return (
      <div
        className="text-#414a5e flex h-[40px] flex-1 cursor-pointer select-none items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-2 text-sm font-bold hover:bg-slate-400"
        onClick={handleBack}
      >
        Back
      </div>
    );
  }
  return (
    <div
      className="text-#414a5e flex h-[40px] flex-1 cursor-pointer select-none items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-2 text-sm font-bold hover:bg-slate-400"
      onClick={handleLetter}
    >
      {letter}
    </div>
  );
};

export default Key;
