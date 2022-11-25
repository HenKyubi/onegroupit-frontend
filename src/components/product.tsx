import React, { useState } from "react";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";

const Product: React.FC<{
  className?: string;
  productName?: string;
  productImg?: string;
  productPrice?: string;
}> = ({ productName, productImg, productPrice }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
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
            $ {productPrice}
          </span>
          <div className="product__box-details-container-timestamp-calification">
            <div className="product__box-details-container-timestamp-calification-timestamp">
              <FaRegClock />
              <span>timestamp</span>
            </div>
            <div className="product__box-details-container-timestamp-calification-calification">
              <FaStar className="star-active" />
              <FaStar className="star-active" />
              <FaRegStar className="star-unactivate" />
              <FaRegStar className="star-unactivate" />
              <FaRegStar className="star-unactivate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
