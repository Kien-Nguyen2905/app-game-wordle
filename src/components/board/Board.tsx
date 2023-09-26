import React from "react";
import Square from "../square/Square";
interface IBoard {
  board: string[];
}

const Board: React.FC<IBoard> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="mt-3 grid grid-cols-5 gap-2 ">
        {board.map((square, index) => {
          return <Square value={square} index={index} key={index}></Square>;
        })}
      </div>
    </>
  );
};

export default Board;
