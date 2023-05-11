import React from "react";
import { useDispatch } from "react-redux";
import { Iglobal } from "../../interface";
import { useSelector } from "react-redux";
import { decrement, increment, setBoard } from "../../store/boardSlice";
interface Ikey {
  letter?: string;
}
const Key: React.FC<Ikey> = ({ letter = "" }) => {
  const board = useSelector((state: Iglobal) => state.board.board);
  const position = useSelector((state: Iglobal) => state.board.position);
  const dispatch = useDispatch();
  const handleLetter = () => {
    if (position >= 30) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increment());
  };
  const handleBack = () => {
    if (position <= 0) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decrement());
  };
  if (letter === "M") {
    return (
      <>
        <div className="text-#414a5e flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-4 text-lg font-bold">
          {letter}
        </div>
        <div className="text-#414a5e flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-4 text-lg font-bold">
          Enter
        </div>
      </>
    );
  }
  if (letter === "Back") {
    return (
      <div
        className="text-#414a5e flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-4 text-lg font-bold"
        onClick={handleBack}
      >
        Back
      </div>
    );
  }
  return (
    <div
      className="text-#414a5e flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-4 text-lg font-bold"
      onClick={handleLetter}
    >
      {letter}
    </div>
  );
};

export default Key;
