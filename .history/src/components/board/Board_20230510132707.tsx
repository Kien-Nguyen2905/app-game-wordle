import React from "react";
import Square from "../square/Square";
interface Iboard {
  board: string[];
}

const Board: React.FC<Iboard> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="grid grid-rows-6">
        {board.map((square, index) => {
          return <Square value={square} index={index}></Square>;
        })}
      </div>
    </>
  );
};

export default Board;
