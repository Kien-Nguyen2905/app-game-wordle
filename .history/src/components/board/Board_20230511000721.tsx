import React from "react";
import Square from "../square/Square";
interface Iboard {
  board: string[];
}

const Board: React.FC<Iboard> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="mt-8 grid grid-cols-5 gap-2 ">
        {board.map((square, index) => {
          return <Square value={square} index={index} key={index}></Square>;
        })}
      </div>
    </>
  );
};

export default Board;
