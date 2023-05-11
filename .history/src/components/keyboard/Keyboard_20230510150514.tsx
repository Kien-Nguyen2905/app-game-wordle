import React from "react";
import Key from "../key/Key";
const Keyboard: React.FC = () => {
  const listkey: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  return (
    <div className="flex flex-col gap-2 pt-8">
      {listkey.map((item, index) => {
        return (
          <div className="flex flex-row gap-2">
            {index === 2 && <Key letter=""></Key>}
            {item.split(" ").map((letter, index) => (
              <Key letter={letter.toUpperCase()} index={index}></Key>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
