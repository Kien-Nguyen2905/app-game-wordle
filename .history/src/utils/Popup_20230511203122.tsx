import ReactDOM from "react-dom";

const Popup = () => {
  const body = document.querySelector("body");
  if (!body) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 ">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    </div>,
    body
  );
};

export default Popup;
