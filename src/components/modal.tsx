import ReactDOM from "react-dom";
import React from "react";

const Modal: React.FC<{
  children?: JSX.Element | JSX.Element[];
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ children, isOpen, toggleModal }) => {
  const handleModalContainerClick = (e: React.SyntheticEvent<EventTarget>) =>
    e.stopPropagation();
  return ReactDOM.createPortal(
    <div className={`modal ${isOpen && "isOpen"}`} onClick={toggleModal}>
      <div className="modal__container" onClick={handleModalContainerClick}>
        <div className="modal__container-close">
          <button onClick={toggleModal}>x</button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
