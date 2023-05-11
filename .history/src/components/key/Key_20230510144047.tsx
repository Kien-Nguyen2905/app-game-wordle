import React from "react";
interface Ikey {
  letter: string;
}
const Key: React.FC<Ikey> = ({ letter }) => {
  return <div className="h-[46px] p-3 bg-#dce1ed">{letter}</div>;
};

export default Key;
