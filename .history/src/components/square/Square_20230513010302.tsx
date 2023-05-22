import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IGlobal } from "../../interface";
interface ISquare {
  value: string;
  index: number;
}
const Square: React.FC<ISquare> = ({ value, index }) => {
  const word = useSelector((state: IGlobal) => state.board.word);
  console.log(word);
  const position = useSelector((state: IGlobal) => state.board.position);
  const row = useSelector((state: IGlobal) => state.board.row);
  const [correct, setCorrect] = useState<boolean>();
  const [wrong, setWrong] = useState<boolean>();
  const [spot, setSpot] = useState<boolean>();
  let wordLast = 4;
  let currentPos =
    position === 5
      ? wordLast
      : position > 5 && position % 5 === 0
      ? wordLast
      : (position % 5) - 1;
  useEffect(() => {
    if (word[currentPos] == value) {
      setCorrect(true);
    } else if (!correct && value != "" && word.includes(value)) {
      setSpot(true);
    } else if (!correct && value != "" && !word.includes(value)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setSpot(false);
      setWrong(false);
    };
  }, [value]);
  const status: any =
    Math.floor(index / 5) < row &&
    (correct ? "correct" : wrong ? "wrong" : spot ? "spot" : "");
  return (
    <div
      className={`${status} boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold`}
    >
      {value}
    </div>
  );
};

export default Square;
