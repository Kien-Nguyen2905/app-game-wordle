import React, { ReactNode } from "react";
interface Ipop {
  children: ReactNode;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  return <div className=" fixed bg-[#fff] p-10 text-[20px]">{children}</div>;
};

export default Popup;
