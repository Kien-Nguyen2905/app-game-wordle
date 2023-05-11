import React from "react";
interface Iboard {
  board: string[];
}

const Board: React.FC<Iboard> = ({ board }) => {
  return <div className="">{board.map(value, (index) => {})}</div>;
};

export default Board;
