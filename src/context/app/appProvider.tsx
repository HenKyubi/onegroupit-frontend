import axios from "axios";
import { useReducer } from "react";
import { GetProductsResponse } from "../../interfaces/getProductsResponse";
import { AppState, Product, userData } from "../../interfaces/types";
import { AppContext } from "./appContext";
import { AppReducer } from "./appReducer";

interface props {
  children: JSX.Element | Array<JSX.Element>;
}

const INITIAL_STATE: AppState = {
  userData: { id: "", firstName: "", lastName: "", email: "", token: "" },
  productsList: [],
  productsListFiltred: [],
  hasActiveFilters: false,
};

export const AppProvider = ({ children }: props) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const getProducts = async (
    token: string
  ): Promise<{ message: string; productsList: Product[] }> => {
    return await axios
      .get<GetProductsResponse>(`${API_URL}/products`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        dispatch({
          type: "getProducts",
          payload: { productsList: res.data.productsData },
        });
        return { message: "Success", productsList: res.data.productsData };
      })
      .catch((error) => {
        return { message: error, productsList: [] };
      });
  };

  const setProductsList = (productsList: Product[]) => {
    dispatch({ type: "setProductsList", payload: { productsList } });
  };

  const setFilterProductsList = (filterProductsList: Product[]) => {
    dispatch({
      type: "setFilterProductsList",
      payload: { filterProductsList },
    });
  };

  const setHasFilters = (hasFilters: boolean) => {
    dispatch({ type: "setHasFilters", payload: { hasFilters } });
  };

  const closeSession = () => {
    dispatch({ type: "closeSession" });
  };

  const setUserData = (userData: userData) => {
    dispatch({ type: "setUserData", payload: { userData } });
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setUserData,
        getProducts,
        setProductsList,
        setHasFilters,
        setFilterProductsList,
        closeSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
