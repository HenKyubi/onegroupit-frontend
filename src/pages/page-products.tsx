import { useContext, useEffect, useState, useCallback } from "react";
import { userData, userData as UserData } from "../interfaces/types";

//API
import { getProducts } from "../api";

//Context
import { AppContext } from "../context/app/appContext";

//Components
import Navbar from "../components/navbar";
import Product from "../components/product";
import Spiner from "../components/spiner";

const PageProducts = () => {
  const { appState, setProductsList } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getSession = useCallback((): userData => {
    const localSession: string | null = localStorage.getItem("authData");
    const tempSession: string | null = sessionStorage.getItem("authData");
    if (!localSession) {
      const userData: UserData = JSON.parse(tempSession!);
      return userData;
    } else {
      const userData: UserData = JSON.parse(localSession!);
      return userData;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const userData = getSession();
    getProducts(userData.token).then((res) => {
      setProductsList(res.productsList);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-products">
      <Navbar />
      {isLoading && (
        <div
          style={{
            width: "100%",
            height: "92%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spiner />
        </div>
      )}
      {!isLoading && (
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
      )}
    </div>
  );
};

export default PageProducts;
