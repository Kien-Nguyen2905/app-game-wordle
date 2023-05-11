import React from "react";
interface Isquare {
  value: string;
  index: number;
}
const Square: React.FC<Isquare> = ({ value, index }) => {
  return (
    <div className="w-[56px] h-[56px] border-2 boder-[#dee1e9] rounded-lg bg-#fbfcff flex items-center justify-center text-2xl font-bold">
      {value}
    </div>
  );
};

export default Square;
