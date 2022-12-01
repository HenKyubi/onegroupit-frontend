import { useContext, useEffect, useLayoutEffect, useState } from "react";

//Context
import { AppContext } from "../context/app/appContext";

//Components
import Navbar from "../components/navbar";
import Product from "../components/product";
import { userData as UserData } from "../interfaces/types";

const PageProducts = () => {
  const { appState, getProducts, setUserData, setProductsList } =
    useContext(AppContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getSession = (): void => {
    const localSession: string | null = localStorage.getItem("authData");
    const tempSession: string | null = sessionStorage.getItem("authData");
    if (!localSession) {
      const userData: UserData = JSON.parse(tempSession!);
      setUserData(userData);
    } else {
      const userData: UserData = JSON.parse(localSession!);
      setUserData(userData);
    }
  };

  // const fetchProducts = async () => {
  //   await getProducts(appState.userData.token).then((res) => {
  //     setProductsList(res.productsList);
  //   });
  // };

  useLayoutEffect(() => {
    getSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProducts(appState.userData.token).then((res) => {
      // console.log(res.productsList);
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
          Loading
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
