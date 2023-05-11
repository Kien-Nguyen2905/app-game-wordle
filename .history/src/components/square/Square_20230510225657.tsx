import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Iglobal } from "../../interface";
interface Isquare {
  value: string;
  index: number;
}
const Square: React.FC<Isquare> = ({ value, index }) => {
  const word = useSelector((state: Iglobal) => state.board.word);
  const position = useSelector((state: Iglobal) => state.board.position);
  let wordLast = 4;
  let currentPos =
    position === 5
      ? wordLast
      : position > 5 && position % 5 === 0
      ? wordLast
      : (position % 5) - 1;
  useEffect(() => {
    console.log(word[currentPos]);
  }, [value]);
  return (
    <div className="boder-[#dee1e9] bg-#fbfcff flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 text-[28px] font-bold">
      {value}
    </div>
  );
};

export default Square;
