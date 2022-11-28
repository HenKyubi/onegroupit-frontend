import { useContext, useEffect } from "react";

import { getProducts } from "../api";

//Context
import { AppContext } from "../context/app/app-context";

//Components
import Navbar from "../components/navbar";
import Product from "../components/product";

const PageProducts = () => {
  const { appState } = useContext(AppContext);

  const fetchProducts = async () => {
    const res = await getProducts(appState.token);
    // if (res.message === "Success") {
      appState.productList = res.productsData;
    // }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="page-products">
      <Navbar />
      <div className="page-products__list-products">
        {appState.productList.map((product) => (
          <Product
            productName={product.name}
            productPrice={product.price}
            productImg={product.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PageProducts;
