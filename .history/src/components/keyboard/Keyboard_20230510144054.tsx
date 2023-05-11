import React from "react";
import Key from "../key/Key";
const Keyboard: React.FC = () => {
  const listkey: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  return (
    <div className="">
      {listkey.map((item, index) => {
        return (
          <div className="flex flex-row justify-stretch">
            {item.split(" ").map((key, index) => (
              <Key letter={key}></Key>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
