import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaMoneyBill, FaStar, FaShoppingBag, FaLink } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

//API
import { registerNewProduct } from "../api";

//Components
import Modal from "./modal";

//Context
import { AppContext } from "../context/app/app-context";

type formProduct = {
  name: string;
  price: number;
  img: string;
  calification: number;
  dateOfExpiration: Date;
};

const FormProduct: React.FC<{
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ isOpen, toggleModal }) => {
  const { register, handleSubmit, reset } = useForm<formProduct>();
  const toastSuccess = (message: string) => toast.success(message);
  const toastError = (message: string) => toast.error(message);

  const { appState } = useContext(AppContext);

  const onSubmit = async (data: formProduct) => {
    const res = await registerNewProduct(
      data.name,
      data.price,
      data.img,
      data.dateOfExpiration,
      data.calification,
      appState.token
    );
    if (res.message === "Success") {
      toastSuccess(res.message);
      reset();
    } else {
      toastError(res.message);
    }
  };

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(onSubmit)} className="form__product">
        <div className="pb-1">
          <h1 className="textAlignCenter">Product</h1>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="text"
              placeholder="Product name"
              {...register("name", { required: true })}
              maxLength={100}
              required
            />
            <FaShoppingBag />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="number"
              placeholder="Price"
              {...register("price", {
                required: true,
              })}
              min={0}
              max={9999999999}
              required
            />
            <FaMoneyBill />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="url"
              placeholder="URL picture ex: https://"
              {...register("img", { required: true })}
              required
            />
            <FaLink />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="number"
              placeholder="Calification"
              {...register("calification", { required: true })}
              min={0}
              max={5}
              required
            />
            <FaStar />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="datetime-local"
              placeholder="Date of expiration"
              {...register("dateOfExpiration", { required: true })}
              required
            />
          </div>
        </div>
        <div className="form__product-box-btn-submit">
          <input className="btn__primary" type="submit" value="Submit" />
        </div>
        <ToastContainer autoClose={1500} />
      </form>
    </Modal>
  );
};

export default FormProduct;
