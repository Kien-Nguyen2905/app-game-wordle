import React from "react";
interface Ikey {
  letter: string;
}
const Key: React.FC<Ikey> = ({ letter }) => {
  return (
    <div className="flex items-center justify-center bg-[#dce1ed] rounded text-lg text-#414a5e border-2 border-transparent flex-1 h-[46px] p-3">
      {letter}
    </div>
  );
};

export default Key;
