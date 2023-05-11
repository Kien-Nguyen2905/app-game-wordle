import { ReactNode, useEffect, useState } from "react";

interface Ipop {
  children: ReactNode;
}
const Popup: React.FC<Ipop> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isVisible ? (
    <div className="absolute right-1/2 top-[44%] -translate-y-1/2 translate-x-1/2 rounded-2xl bg-[#fff] px-11 py-7 text-lg font-semibold shadow-3xl">
      {children}
    </div>
  ) : null;
};

export default Popup;
