import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
interface Ipop {
  children: ReactNode;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  });
  return () => {
    clearTimeout(timer);
  };
};

export default Popup;
