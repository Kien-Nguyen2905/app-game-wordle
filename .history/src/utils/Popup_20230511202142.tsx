import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
interface Ipop {
  open: boolean;
}
const Popup: React.FC<Ipop> = () => {
  const body = document.querySelector("body");
  if (!body) return null;
  return ReactDOM.createPortal(
    <div className=" fixed inset-0   rounded-lg bg-[#fff] px-10 py-4  text-[20px]">
      hello
    </div>,
    body
  );
};

export default Popup;
