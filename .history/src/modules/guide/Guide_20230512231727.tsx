import React from "react";
import ReactDOM from "react-dom";
const Guide = () => {
  const container = document.querySelector("body");
  if (!container) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 z-10 "></div>
    </div>,
    container
  );
};

export default Guide;
