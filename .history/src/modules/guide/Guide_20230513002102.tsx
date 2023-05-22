import React from "react";
import ReactDOM from "react-dom";
interface Iguide {
  open: boolean;
  handleClose?: () => void;
}
const Guide: React.FC<Iguide> = ({ open = false }) => {
  const container = document.querySelector("body");
  if (!container) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-20"></div>
      <div className="absolute z-20 h-[630px] w-[560px] bg-transparent">
        <h3 className=" relative flex min-h-[38px] w-full items-center justify-center rounded-md bg-white text-lg font-bold">
          How to play
          <button className="absolute right-0 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </h3>
        <div className="flex flex-col items-center">
          <p className=" m-3 text-center text-sm text-[#2e3239] ">
            You have to guess the hidden word in 6 tries and the color of the
            letters changes to show how close you are.
          </p>
          <p className=" mb-3 text-center text-sm text-[#2e3239]">
            To start the game, just enter any word, for example:
          </p>
          <div className="flex items-center gap-2">
            <span className="wrong boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              T
            </span>
            <span className="spot boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              A
            </span>
            <span className="wrong boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              B
            </span>
            <span className="spot boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              L
            </span>
            <span className="correct boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              E
            </span>
          </div>
          <div className="my-2  min-w-[450px] rounded-lg bg-[#edf0f5] px-[15px] py-[10px]">
            <div className="flex items-end">
              <span className="wrong boder-[#dee1e9] flex items-center justify-center rounded-lg border-2 bg-[#fbfcff] px-[8px] py-[2px] text-sm font-bold">
                T
              </span>
              <span className="px-1">,</span>
              <span className="wrong boder-[#dee1e9] flex items-center justify-center rounded-lg border-2 bg-[#fbfcff] px-[8px] py-[2px] text-sm font-bold">
                B
              </span>
              <p className="pl-1 text-sm text-[#2e3239]">
                aren't in the target word at all.
              </p>
            </div>
            <div className="flex items-end">
              <span className="spot boder-[#dee1e9] flex items-center justify-center rounded-lg border-2 bg-[#fbfcff] px-[8px] py-[2px] text-sm font-bold">
                A
              </span>
              <span className="px-1">,</span>
              <span className="spot boder-[#dee1e9] flex items-center justify-center rounded-lg border-2 bg-[#fbfcff] px-[8px] py-[2px] text-sm font-bold">
                L
              </span>
              <p className="pl-1 text-sm text-[#2e3239]">
                is in the word but in the wrong spot.
              </p>
            </div>
            <div className="flex items-end">
              <span className="correct boder-[#dee1e9] flex items-center justify-center rounded-lg border-2 bg-[#fbfcff] px-[8px] py-[2px] text-sm font-bold">
                E
              </span>
              <p className="pl-1 text-sm text-[#2e3239]">
                is in the word and in the correct spot.
              </p>
            </div>
          </div>
          <p className=" mb-3 text-center text-sm text-[#2e3239]">
            Another try to find matching letters in the target word.
          </p>
          <div className="flex items-center gap-2">
            <span className="correct boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              F
            </span>
            <span className="correct boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              L
            </span>
            <span className="correct boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              A
            </span>
            <span className="wrong boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              S
            </span>
            <span className="wrong boder-[#dee1e9] flex h-[56px] w-[56px] items-center justify-center rounded-lg border-2 bg-[#fbfcff] text-[28px] font-bold">
              H
            </span>
          </div>
          <p className=" m-3 text-center text-sm text-[#2e3239]">So close!</p>
        </div>
      </div>
    </div>,
    container
  );
};

export default Guide;
