import React, { useState, useContext } from "react";
import { FaRegClock, FaRegStar, FaStar, FaPen, FaTrash } from "react-icons/fa";
import { deleteProduct } from "../api";

//Context
import { AppContext } from "../context/app/appContext";

const Product: React.FC<{
  className?: string;
  productId: string;
  productName: string;
  productPrice: number;
  productImg: string;
  productCalification: number;
  productDateOfExpiration: Date;
}> = ({
  productId,
  productName,
  productPrice,
  productImg,
  productDateOfExpiration,
  productCalification,
}) => {
  const [toggle, setToggle] = useState(false);

  const [remainnTime, setRemainTime] = useState({
    remainTime: 0,
    remainDays: 0,
    remainHours: "",
    remainMinutes: "",
    remainSeconds: "",
  });

  const { appState, getProducts } = useContext(AppContext);

  const handleDeleteProduct = async () => {
    await deleteProduct(productId, appState.token);
    await getProducts(appState.token);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const stars: JSX.Element[] = [];

  for (let index = 1; index <= 5; index++) {
    productCalification >= index
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

  const getRemainTime = (deadline: Date) => {
    const now = Date.now();
    const parseDeadLine = Date.parse(deadline.toString());
    const remainTime = (parseDeadLine - now + 1000) / 1000;
    const remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
    const remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
    const remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
    const remainDays = Math.floor(remainTime / (3600 * 24));
    setRemainTime({
      remainTime,
      remainDays,
      remainHours,
      remainMinutes,
      remainSeconds,
    });
  };

  setInterval(() => {
    getRemainTime(productDateOfExpiration);
  }, 1000);

  return (
    <div className="product">
      <div className="product__box-top-image">
        <img src={productImg} alt={productImg} />
      </div>
      <div className="product__box-details">
        <div className="product__box-details-container">
          <div className="product__box-details-container-title-options">
            <span>{productName}</span>
            <div className="dropdown">
              <button className="dropbtn" onClick={handleToggle}>
                ፧
              </button>
              <div className={`dropdown-content ${toggle && "show"}`}>
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
            {formatter.format(productPrice)}
          </span>
          <div className="product__box-details-container-timestamp-calification">
            <div className="product__box-details-container-timestamp-calification-timestamp">
              <FaRegClock />
              <span>
                {remainnTime.remainTime > 0
                  ? `${remainnTime.remainDays} d ${remainnTime.remainHours} h`
                  : "Expired"}
              </span>
            </div>
            <div className="product__box-details-container-timestamp-calification-calification">
              {stars.map((star) => star)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
