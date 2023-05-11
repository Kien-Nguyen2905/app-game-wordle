import React from "react";
interface Ipop {
  children: Node;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  return <div>{children}</div>;
};

export default Popup;
{
}
