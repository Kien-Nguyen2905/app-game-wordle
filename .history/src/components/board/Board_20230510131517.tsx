import React from "react";
interface Iboard {
  board: string[];
}

const Board: React.FC<Iboard> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="">{board.map((square, index) => {})}</div>
    </>
  );
};

export default Board;
