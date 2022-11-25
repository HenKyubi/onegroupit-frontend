import React from "react";
import Modal from "./modal";

const FormProduct: React.FC<{
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ isOpen, toggleModal }) => {
  const handleSudmit = async () => {};
  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <form onSubmit={handleSudmit}>
        <div>
          <h2>Product</h2>
        </div>
        <div>
          <label htmlFor="product__name">Name:</label>
          <input type="text" placeholder="Product name" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </Modal>
  );
};

export default FormProduct;
