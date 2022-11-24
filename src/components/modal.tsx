import React from "react";
import "./modal.scss";

const Modal: React.FC<{
  children?: JSX.Element | JSX.Element[];
  toggleModal: () => void;
  isOpen: boolean;
}> = ({ children, isOpen, toggleModal }) => {
  // const handleModalToggle = (e: Event ) => e.stopPropagation();
  return (
    <div className={`modal ${isOpen && "isOpen"}`}>
      <div className="modal__container">
        <div className="modal__close">
          <button onClick={toggleModal}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
