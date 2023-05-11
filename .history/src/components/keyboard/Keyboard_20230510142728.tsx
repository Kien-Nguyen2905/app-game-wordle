import React from "react";
import Key from "../key/Key";
const Keyboard: React.FC = () => {
  const listkey = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"];
  return (
    <div className="grid grid-rows-3">
      {listkey.map((item, index) => {
        return (
          <div className="">{item.split(" ").map((letter, index) => {})}</div>
        );
      })}
    </div>
  );
};

export default Keyboard;
