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
        <h3 className="font-bol flex min-h-[38px] w-full bg-[#e5ecff] text-center text-xl">
          How to play
        </h3>
      </div>
    </div>,
    container
  );
};

export default Guide;
