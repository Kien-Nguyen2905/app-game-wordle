import React from "react";
interface Ikey {
  letter: string;
  index: number;
}
const Key: React.FC<Ikey> = ({ letter, index }) => {
  if (letter === "M") {
    return (
      <>
        <div className="flex items-center justify-center bg-[#dce1ed] rounded text-lg text-#414a5e border-2 border-transparent flex-1 h-[46px] p-4 cursor-pointer font-bold">
          {letter}
        </div>
        <span className="flex items-center justify-center bg-[#dce1ed] rounded text-lg text-#414a5e border-2 border-transparent flex-1 h-[46px] p-4 cursor-pointer font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </>
    );
  }
  return (
    <div className="flex items-center justify-center bg-[#dce1ed] rounded text-lg text-#414a5e border-2 border-transparent flex-1 h-[46px] p-4 cursor-pointer font-bold">
      {letter}
    </div>
  );
};

export default Key;
