import React, { useContext } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FaMoneyBill, FaStar, FaShoppingBag, FaLink } from "react-icons/fa";
import { Product, formProduct } from "../interfaces/types";

//API
import { registerNewProduct, modifyProduct, getProducts } from "../api";

//Components
import Modal from "./modal";

//Context
import { AppContext } from "../context/app/appContext";

type action = "modify" | "create";

const FormProduct: React.FC<{
  isOpen: boolean;
  toggleModal: () => void;
  productData?: Product;
  action: action;
}> = ({ isOpen, toggleModal, productData, action }) => {
  const dateTimeFormated: string = moment(
    productData?.dateOfExpiration,
    moment.ISO_8601
  ).format("YYYY-MM-DDTHH:mm");
  const { register, handleSubmit, reset } = useForm<formProduct>({
    defaultValues: {
      ...productData,
      dateOfExpiration: dateTimeFormated,
    },
  });

  const toastSuccess = (message: string) => toast.success(message);
  const toastError = (message: string) => toast.error(message);

  const { appState, setProductsList } = useContext(AppContext);

  const modifyProductAction = async (data: formProduct) => {
    await modifyProduct(
      {
        _id: productData?._id!,
        ...data,
        dateOfExpiration: new Date(data.dateOfExpiration),
      },
      appState.userData.token
    )
      .then(async (res) => {
        toastSuccess(res.message);
        await getProducts(appState.userData.token).then((res) => {
          setProductsList(res.productsList);
        });
      })
      .catch((error) => {
        toastError(error.message);
      });
  };

  const createProductAction = async (data: formProduct) => {
    await registerNewProduct(
      {
        _id: productData?._id!,
        ...data,
        dateOfExpiration: new Date(data.dateOfExpiration),
      },
      appState.userData.token
    )
      .then(async (res) => {
        await getProducts(appState.userData.token).then((res) => {
          setProductsList(res.productsList);
        });
        toastSuccess(res.message);
        reset();
      })
      .catch((error) => {
        toastError(error.message);
      });
  };

  const onSubmit = (data: formProduct) => {
    switch (action) {
      case "create":
        createProductAction(data);
        break;
      case "modify":
        modifyProductAction(data);
        break;
      default:
        break;
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
              {...register("imgUrl", { required: true })}
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
