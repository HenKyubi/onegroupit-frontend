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
    <div style={{ borderRadius: "28px", backgroundColor: "#FFFFFF" }}>
      <div style={{ height: "50%", width: "100%" }}>
        <img
          src={productImg}
          alt={productImg}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
          }}
        />
      </div>
      <div
        style={{
          height: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#050505",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {productName}
            </span>
            {/* <label htmlFor="lang">Lenguaje</label> */}
            {/* <select name="lenguajes" id="lang">
              <option value="selecciona">Selecciona un lenguaje</option>
              <option value="javascript">JavaScript</option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
              <option value="C++">C++</option>
              <option value="erlang">Erlang</option>
            </select> */}
            <button
              style={{
                fontSize: "1.5em",
                fontWeight: 700,
                color: "#4A4844",
                background: "none",
                border: "none",
                padding: "0",
                textAlign: "end",
              }}
              onClick={handleToggle}
            >
              ፧
            </button>
          </div>
          <span
            style={{
              color: "#050505",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            $ {productPrice}
          </span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaRegClock style={{ color: "#010101" }} />
              <span
                style={{
                  color: "#010101",
                  fontWeight: "400",
                  fontSize: "8px",
                  boxSizing: "border-box",
                  paddingLeft: "1em",
                }}
              >
                timestamp
              </span>
            </div>
            <div>
              <FaStar style={{ color: "#F8A33C", fontSize: "14px " }} />
              <FaStar style={{ color: "#F8A33C", fontSize: "14px " }} />
              <FaRegStar style={{ color: "#D6D6D6", fontSize: "14px " }} />
              <FaRegStar style={{ color: "#D6D6D6", fontSize: "14px " }} />
              <FaRegStar style={{ color: "#D6D6D6", fontSize: "14px " }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
