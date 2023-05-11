import { ReactNode } from "react";
import ReactDOM from "react-dom";
interface Ipop {
  children: ReactNode;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  // const body = document.querySelector("body");
  // if (!body) return null;
  // return ReactDOM.createPortal(
  //   <div className="fixed inset-0 z-50 ">
  //     <div className="absolute inset-0 bg-black bg-opacity-25"></div>
  //   </div>,
  //   body
  // );
  return (
    <div className="absolute p-10 bg-black bg-opacity-25 right-1/2 top-1/2"></div>
  );
};

export default Popup;
