import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
interface Ipop {
  open: boolean;
}
const Popup: React.FC<Ipop> = ({ open = false }) => {
  const body = document.querySelector("body");
  if (!body) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 ">
      <div className=""></div>
    </div>,
    body
  );
};

export default Popup;
