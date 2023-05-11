import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Iglobal } from "../../interface";
interface Isquare {
  value: string;
  index: number;
}
const Square: React.FC<Isquare> = ({ value, index }) => {
  const word = useSelector((state: Iglobal) => state.board.word);
  console.log(word);
  const position = useSelector((state: Iglobal) => state.board.position);
  const row = useSelector((state: Iglobal) => state.board.row);
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
  }, [value]);
  const status: any =
    Math.floor(index / 5) < row &&
    (correct ? "correct" : wrong ? "wrong" : spot ? "spot" : "");
  return (
    <div
      className={`${status} boder-[#dee1e9] bg-#fbfcff flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 text-[28px] font-bold`}
    >
      {value}
    </div>
  );
};

export default Square;
