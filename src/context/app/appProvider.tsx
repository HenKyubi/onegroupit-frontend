import { useReducer } from "react";
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
  const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

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
