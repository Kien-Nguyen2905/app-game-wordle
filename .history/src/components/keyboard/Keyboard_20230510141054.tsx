import React from "react";

const Keyboard: React.FC = () => {
  const listkey = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"];
  return <div className="">{listkey.map(item, (index) => {})}</div>;
};

export default Keyboard;
