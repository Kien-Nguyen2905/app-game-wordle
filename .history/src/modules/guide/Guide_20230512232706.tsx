import React from "react";
import ReactDOM from "react-dom";
interface Iguide {
  open: boolean;
  hanndleClose: () => void;
}
const Guide: React.FC<Iguide> = ({ open = false, handleCLose = () => {} }) => {
  const container = document.querySelector("body");
  if (!container) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-20"></div>
      <div className="absolute z-20 h-[630px] w-full bg-white"></div>
    </div>,
    container
  );
};

export default Guide;
