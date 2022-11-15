import React from "react";

const Product = () => {
  return (
    <div style={{ borderRadius: "28px", backgroundColor: "#FFFFFF" }}>
      <img src="" alt="" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Name product</span>
        <i>...</i>
      </div>
      <span>$ pice</span>
      <div>
        <div>
          <i>clock</i>
          <span>timestamp</span>
        </div>
        <div>stars</div>
      </div>
    </div>
  );
};

export default Product;
