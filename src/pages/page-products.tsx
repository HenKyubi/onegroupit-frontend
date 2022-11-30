import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Context
import { AppContext } from "../context/app/appContext";

//Components
import Navbar from "../components/navbar";
import Product from "../components/product";

const PageProducts = () => {
  const navigate = useNavigate();
  const { appState, getProducts } = useContext(AppContext);

  useEffect(() => {
    if (appState.token === "" || appState.token === null) {
      navigate("/login", { replace: true });
    } else {
    }
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
