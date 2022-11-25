// import { useContext } from "react";

//Context
// import { AppContext } from "../context/app/app-context";

//Components
import Navbar from "../components/navbar";
import Product from "../components/product";

//Assets
import photo from "../assets/laptop.jpg";
const PageProducts = () => {
  // const { appState } = useContext(AppContext);

  return (
    <div className="page-products">
      <Navbar />
      <div className="page-products__list-products">
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
