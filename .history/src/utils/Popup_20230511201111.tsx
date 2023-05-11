import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
interface Ipop {
  open: boolean;
}
const Popup: React.FC<Ipop> = ({ open = false }) => {
  const body = document.querySelector("body");
  if (!body) return null;
  return ReactDOM.createPortal(
    <div className=" absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2  rounded-lg bg-[#fff] px-10 py-4  text-[20px]">
      {children}
    </div>,
    body
  );
};

export default Popup;
