import React from "react";
interface Ikey {
  letter?: string;
}
const Key: React.FC<Ikey> = ({ letter = "" }) => {
  const handleLetter = () => {};
  if (letter === "M") {
    return (
      <>
        <div className="text-#414a5e flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-4 text-lg font-bold">
          {letter}
        </div>
        <div className="text-#414a5e flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-4 text-lg font-bold">
          Enter
        </div>
      </>
    );
  }
  return (
    <div
      className="text-#414a5e flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-[#dce1ed] p-4 text-lg font-bold"
      onClick={handleLetter}
    >
      {letter}
    </div>
  );
};

export default Key;
