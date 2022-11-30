import { useContext, useEffect } from "react";

//Context
import { AppContext } from "../context/app/appContext";

//Components
import Navbar from "../components/navbar";
import Product from "../components/product";

const PageProducts = () => {
  const { appState, getProducts } = useContext(AppContext);

  useEffect(() => {
    getProducts(appState.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-products">
      <Navbar />
      <div className="page-products__list-products">
        {!appState.hasActiveFilters &&
          appState?.productsList?.map((product, key) => (
            <Product key={key} productData={product} />
          ))}
        {appState.hasActiveFilters &&
          appState?.productsListFiltred?.map((product, key) => (
            <Product key={key} productData={product} />
          ))}
      </div>
    </div>
  );
};

export default PageProducts;
