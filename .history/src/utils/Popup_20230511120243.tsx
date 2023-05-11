import React, { ReactNode } from "react";
interface Ipop {
  children: ReactNode;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  return (
    <div className=" absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2  bg-[#fff] px-10 py-4  text-[20px]">
      {children}
    </div>
  );
};

export default Popup;
