import React from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

//API
import { registerUser } from "../api";
import Modal from "./modal";

type formRegister = {
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  email: string;
};

const FormRegister: React.FC<{
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ isOpen, toggleModal }) => {
  const { register, handleSubmit, reset } = useForm<formRegister>();
  const toastSuccess = (message: string) => toast.success(message);
  const toastError = (message: string) => toast.error(message);

  const onSubmit = async (data: formRegister) => {
    if (data.password === data.repeatPassword) {
      await registerUser(
        data.firstName,
        data.lastName,
        data.email,
        data.password
      ).then((res) => {
        if (res.message === "User registred") {
          reset();
          toggleModal();
          toastSuccess(res.message);
        } else {
          toastError(res.message);
        }
      });
    } else {
      toastError("Passwords not are the same");
    }
  };

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(onSubmit)} className="form__register">
        <div className="pb-1">
          <h1 className="textAlignCenter">Sign up</h1>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true, maxLength: 50 })}
            />
            <FaUserCircle />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true, max: 50, min: 1 })}
            />
            <FaUserCircle />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <FaEnvelope />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <FaLock />
          </div>
        </div>
        <div className="pb-1">
          <div className="form__input_box">
            <input
              type="password"
              placeholder="Repeat Password"
              {...register("repeatPassword", { required: true })}
            />
            <FaLock />
          </div>
        </div>
        <div className="form__register-box-btn-submit">
          <input className="btn__primary" type={"submit"} value="Submit" />
        </div>
        <ToastContainer autoClose={1500} />
      </form>
    </Modal>
  );
};

export default FormRegister;
