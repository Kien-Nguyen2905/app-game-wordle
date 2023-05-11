import React from "react";
import Square from "../square/Square";
interface Iboard {
  board: string[];
}

const Board: React.FC<Iboard> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="grid grid-cols-5 w-[56px] h-[56px] border-2 boder-[#dee1e9] rounded-sm ">
        {board.map((square, index) => {
          return <Square value={square} index={index}></Square>;
        })}
      </div>
    </>
  );
};

export default Board;
