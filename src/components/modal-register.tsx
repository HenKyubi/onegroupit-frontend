import React from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";
import Modal from "./modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type FormRegister = {
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  email: string;
};

const ModalRegister: React.FC<{
  isOpen: boolean;
  toggleModal: () => void;
}> = ({ isOpen, toggleModal }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormRegister>();
  const onSubmit = (data: FormRegister) => {
    if (data.password === data.repeatPassword) {
      console.log("ok");
    }else{

    }
  };

  const notify = () => toast.success("Wow so easy!");
  // const error = () => toast.error('also be wron')

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="pb-1">
          <h1 className="textAlignCenter">Sign up</h1>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #c4c4c4 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true, maxLength: 50 })}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaUserCircle
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#248aff",
              }}
            />
          </div>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #c4c4c4 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true, max: 50, min: 1 })}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaUserCircle
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#248aff",
              }}
            />
          </div>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #c4c4c4 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaEnvelope
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#248aff",
              }}
            />
          </div>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #c4c4c4 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaLock
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#248aff",
              }}
            />
          </div>
        </div>
        <div className="pb-1">
          <div
            style={{
              border: "1px #c4c4c4 solid",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="password"
              placeholder="Repeat Password"
              {...register("repeatPassword", { required: true })}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
              required
            />
            <FaLock
              style={{
                paddingRight: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#248aff",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input className="btn__primary" type={"submit"} value="Submit" />
          {/* Submit
          </input> */}
        </div>

        <button onClick={notify}>Notify!</button>
        <ToastContainer autoClose={2000} toastClassName={'success'}/>
      </form>
    </Modal>
  );
};

export default ModalRegister;
