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
      <div className="absolute z-20 h-[630px] w-[500px] bg-transparent">
        <h3 className=" relative flex min-h-[38px] w-full items-center justify-center rounded-md bg-[#e5ecff] text-xl font-bold">
          How to play
          <button className="">
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
          </button>
        </h3>
      </div>
    </div>,
    container
  );
};

export default Guide;
