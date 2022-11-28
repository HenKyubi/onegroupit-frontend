import React, { useState } from "react";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";

const Product: React.FC<{
  className?: string;
  productName: string;
  productPrice: number;
  productImg: string;
  productCalification: number;
  productDateOfExpiration: Date;
}> = ({
  productName,
  productPrice,
  productImg,
  productDateOfExpiration,
  productCalification,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
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
    let now = Date.now();
    let parseDeadLine = Date.parse(deadline.toString());
    let remainTime = (parseDeadLine - now + 1000) / 1000;
    let remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
    let remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));
    return {
      remainTime,
      remainDays,
      remainHours,
      remainMinutes,
      remainSeconds,
    };
  };

  const remainTime = getRemainTime(productDateOfExpiration);

  return (
    <div className="product">
      <div className="product__box-top-image">
        <img src={productImg} alt={productImg} />
      </div>
      <div className="product__box-details">
        <div className="product__box-details-container">
          <div className="product__box-details-container-title-options">
            <span>{productName}</span>
            <button onClick={handleToggle}>፧</button>
          </div>
          <span className="product__box-details-container-price">
            {formatter.format(productPrice)}
          </span>
          <div className="product__box-details-container-timestamp-calification">
            <div className="product__box-details-container-timestamp-calification-timestamp">
              <FaRegClock />
              <span>
                {remainTime.remainTime > 0
                  ? `${remainTime.remainDays} d ${remainTime.remainHours} h`
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
