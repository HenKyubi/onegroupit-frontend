import React from "react";

const Modal: React.FC<{
  children?: JSX.Element | JSX.Element[];
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ children, isOpen, toggleModal }) => {
  return (
    <div className={`modal ${isOpen && "isOpen"}`}>
      <div className="modal__container">
        <div className="modal__container-close">
          <button onClick={toggleModal}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
