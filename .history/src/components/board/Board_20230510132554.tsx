import React from "react";
import Square from "../square/Square";
interface Iboard {
  board: string[];
}

const Board: React.FC<Iboard> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="gird">
        {board.map((square, index) => {
          return <Square value={square} index={index}></Square>;
        })}
      </div>
    </>
  );
};

export default Board;
