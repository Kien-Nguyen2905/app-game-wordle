import React from "react";
import { useDispatch } from "react-redux";
import { Iglobal } from "../../interface";
import { words } from "../../../words.json";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  decrement,
  increment,
  incrow,
  reset,
  resetRandomWord,
  setBoard,
} from "../../store/boardSlice";
import { toast } from "react-toastify";
import Popup from "../../utils/Popup";
interface Ikey {
  letter?: string;
}
const Key: React.FC<Ikey> = ({ letter = "" }) => {
  const [resetComponent, setResetComponent] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const board = useSelector((state: Iglobal) => state.board.board);
  const position = useSelector((state: Iglobal) => state.board.position);
  const wordCorrect = useSelector((state: Iglobal) => state.board.word);
  const row = useSelector((state: Iglobal) => state.board.row);
  const currentRow = Math.floor(position / 5);
  let checkWord: string = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`.toLowerCase();
  const dispatch = useDispatch();
  console.log(checkWord);
  const handleLetter = () => {
    if (position >= 30) return;
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increment());
  };
  const handleEnter = () => {
    if (!words.includes(checkWord)) {
      setShowPopup(true);
    } else {
      if (position % 5 === 0 && position !== 0 && (position - 1) / 5 > row) {
        dispatch(incrow());
      }
    }
    if (
      position === 30 &&
      !wordCorrect.includes(checkWord.toLocaleUpperCase())
    ) {
      toast.error(`You failed and word is ${wordCorrect}`);
    }
    if (
      (position === 30 &&
        wordCorrect.includes(checkWord.toLocaleUpperCase())) ||
      wordCorrect.includes(checkWord.toLocaleUpperCase())
    ) {
      toast.success("You won");
      resetComponentFunction();
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
  useEffect(() => {
    if (resetComponent) {
      setTimeout(() => {
        dispatch(reset());
        dispatch(resetRandomWord());
      }, 3500);
      setResetComponent(false);
    }
  }, [resetComponent, dispatch]);

  const resetComponentFunction = () => {
    setResetComponent(true);
  };
  console.log(showPopup);
  if (letter === "M") {
    return (
      <>
        <div
          className="text-#414a5e flex h-[40px] flex-1 cursor-pointer select-none items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-2 text-sm font-bold hover:bg-slate-400"
          onClick={handleLetter}
        >
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
    <>
      <div
        className="text-#414a5e flex h-[40px] flex-1 cursor-pointer select-none items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-2 text-sm font-bold hover:bg-slate-400"
        onClick={handleLetter}
      >
        {letter}
      </div>
    </>
  );
};

export default Key;
