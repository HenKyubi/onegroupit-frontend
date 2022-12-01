import React, { useState, useContext } from "react";
import moment from "moment";
import { FaRegClock, FaRegStar, FaStar, FaPen, FaTrash } from "react-icons/fa";

import { Product as product } from "../interfaces/types";

//API
import { deleteProduct } from "../api";

//Hooks
import { useModal } from "../hooks/useModal";
import { useCountdown } from "../hooks/useCoutdown";

//Context
import { AppContext } from "../context/app/appContext";
import FormProduct from "./form-product";

const Product: React.FC<{
  className?: string;
  productData: product;
}> = ({ productData }) => {
  const [toggle, setToggle] = useState(false);

  const { appState, getProducts } = useContext(AppContext);

  const [modifyModalIsOpen, setModifyModalIsOpen] = useModal();

  const dateTimeFormated: number = Date.parse(
    moment(productData.dateOfExpiration, moment.ISO_8601).format(
      "YYYY-MM-DDTHH:mm:ss"
    )
  );

  const [days, hours, minutes, seconds] = useCountdown(dateTimeFormated);

  const handleDeleteProduct = async () => {
    await deleteProduct(productData._id, appState.userData.token);
    await getProducts(appState.userData.token);
  };

  const handleModifyProduct = async () => {
    setToggle(!toggle);
    setModifyModalIsOpen();
  };

  const stars: JSX.Element[] = [];

  for (let index = 1; index <= 5; index++) {
    productData.calification >= index
      ? stars.push(
          <FaStar className="star-active" key={`star-active ${index}`} />
        )
      : stars.push(
          <FaRegStar
            className="star-unactivate"
            key={`star-unactivate ${index}`}
          />
        );
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="product">
      <div className="product__box-top-image">
        <img src={productData.imgUrl} alt={productData.imgUrl} />
      </div>
      <div className="product__box-details">
        <div className="product__box-details-container">
          <div className="product__box-details-container-title-options">
            <span>{productData.name}</span>
            <div className="dropdown">
              <button className="dropbtn" onClick={() => setToggle(!toggle)}>
                ፧
              </button>
              <div
                className={`dropdown-content ${toggle && "show"}`}
                onClick={handleModifyProduct}
              >
                <div className="dropdown-content-item">
                  <FaPen />
                  <span>Edit</span>
                </div>
                <hr />
                <div
                  className="dropdown-content-item"
                  onClick={handleDeleteProduct}
                >
                  <FaTrash />
                  <span>Delete</span>
                </div>
              </div>
            </div>
          </div>
          <span className="product__box-details-container-price">
            {formatter.format(productData.price)}
          </span>
          <div className="product__box-details-container-timestamp-calification">
            <div className="product__box-details-container-timestamp-calification-timestamp">
              <FaRegClock />
              <span>
                {days + hours + minutes + seconds > 0
                  ? `${days} d ${hours} h ${minutes} m ${seconds} s`
                  : "Expired"}
              </span>
            </div>
            <div className="product__box-details-container-timestamp-calification-calification">
              {stars.map((star) => star)}
            </div>
          </div>
        </div>
      </div>
      <FormProduct
        isOpen={modifyModalIsOpen}
        toggleModal={setModifyModalIsOpen}
        productData={productData}
        action={"modify"}
      />
    </div>
  );
};

export default Product;
