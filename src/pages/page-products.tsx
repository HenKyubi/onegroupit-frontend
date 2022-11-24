//Components
import Navbar from "../components/navbar";
import Product from "../components/product";

//Assets
import photo from "../assets/laptop.jpg";
const PageProducts = () => {
  return (
    <div
      // id="page-products"
      style={{
        backgroundColor: "#f4f4f4",
        height: "100%",
        width: "100%",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "92%",
          boxSizing: "border-box",
          padding: "1rem 4rem",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gridColumnGap: "10px",
          gridRowGap: "20px",
        }}
      >
        <Product
          productName="LAPTOP"
          productImg={photo}
          productPrice="100.00"
        />
      </div>
    </div>
  );
};

export default PageProducts;
