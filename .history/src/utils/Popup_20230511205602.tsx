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
    <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#fff] p-10 text-xl font-semibold">
      {children}
    </div>
  );
};

export default Popup;
