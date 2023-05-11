import React from "react";
interface Ikey {
  key: string;
}
const Key: React.FC<Ikey> = ({ key }) => {
  return <div className="h-[46px] p-3">{key}</div>;
};

export default Key;
