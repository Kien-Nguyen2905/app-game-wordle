import { ReactNode } from "react";
import ReactDOM from "react-dom";
interface Ipop {
  children: ReactNode;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  return setTimeout(() => {
    <div className=" absolute right-1/2 top-[44%] -translate-y-1/2 translate-x-1/2 rounded-2xl bg-[#fff] px-11 py-7 text-lg font-semibold shadow-3xl">
      {children}
    </div>;
  }, 3000);
};

export default Popup;
