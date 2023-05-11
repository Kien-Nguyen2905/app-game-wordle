import React, { ReactNode } from "react";
interface Ipop {
  children: ReactNode;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  return <div>{children}</div>;
};

export default Popup;
{
}
