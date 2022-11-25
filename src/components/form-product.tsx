import React from "react";
import { useForm } from "react-hook-form";
import { FaMoneyBill, FaStar, FaShoppingBag, FaLink } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

//API
// import { registerUser } from "../api";
import Modal from "./modal";

type formProduct = {
  name: string;
  price: number;
  img: string;
  calification: number;
  timestamp: Date;
};

const FormProduct: React.FC<{
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ isOpen, toggleModal }) => {
  const { register, handleSubmit, reset } = useForm<formProduct>();
  const toastSuccess = (message: string) => toast.success(message);
  const toastError = (message: string) => toast.error(message);

  const onSubmit = async (data: formProduct) => {
    console.log(data);
    // if (data.password === data.repeatPassword) {
    //   await registerUser(
    //     data.firstName,
    //     data.lastName,
    //     data.email,
    //     data.password
    //   ).then((res) => {
    //     if (res.message === "User registred") {
    // console.log(errors);
    // reset();
    //       toggleModal();
    //       toastSuccess(res.message);
    //     } else {
    //       toastError(res.message);
    //     }
    //   });
    // } else {
    //   toastError("Passwords not are the same");
    // }
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
              type="date"
              placeholder="Time left"
              {...register("timestamp", { required: true })}
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
