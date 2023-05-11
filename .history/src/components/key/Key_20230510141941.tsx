import React from "react";
interface Ikey {
  key: string;
}
const Key: React.FC<Ikey> = ({ key }) => {
  return <div className="">{key}</div>;
};

export default Key;
