import React from "react";
import { useState } from "react";

const Board: React.FC = () => {
  const [board, setBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <div className="">
      {board.map((value, index) => {
        return;
      })}
    </div>
  );
};

export default Board;
