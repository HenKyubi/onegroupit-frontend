import React, { useState } from "react";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";

const Product: React.FC<{
  className?: string;
  productName?: string;
  productPrice?: number;
  productImg?: string;
  productCalification?: number;
  productDateOfExpiration?: Date;
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
  return (
    <div className="product">
      <div className="product__box-top-image">
        <div style={{ backgroundImage: `${productImg}` }}></div>
        {/* <img src={productImg} alt={productImg} /> */}
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
              <span>{productDateOfExpiration?.toString()}</span>
            </div>
            <div className="product__box-details-container-timestamp-calification-calification">
              {/* {for (let index = 0; index < productCalification; index++) {
                const element = array[index];
                
              }} */}
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
