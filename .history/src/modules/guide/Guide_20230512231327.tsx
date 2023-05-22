import React from "react";
import { ReactDOM } from "react";
const Guide = () => {
  const container = document.querySelector("body");
  if (!container) return null;
  return ReactDOM.createPortal(<div className="">d</div>, container);
};

export default Guide;
