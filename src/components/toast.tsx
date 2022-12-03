import React from "react";
import { ToastContainer, toast } from "react-toastify";

type toastt = {
  message: string;
};

const Toast: React.FC<toastt> = ({ message }) => {
  const toastSuccess = (message: string) => toast.success(message);
  const toastError = (message: string) => toast.error(message);
  toastSuccess(message);
  toastError(message);
  return <ToastContainer autoClose={1500} />;
};

export default Toast;
