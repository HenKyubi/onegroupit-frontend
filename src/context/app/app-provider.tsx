import { useReducer } from "react";
import { AppState, Product } from "../../interfaces/types";
import { AppContext } from "./app-context";
import { AppReducer } from "./app-reducer";

import axios from "axios";

const INITIAL_STATE: AppState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  productList: [],
};

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}
export const AppProvider = ({ children }: Props) => {
  const server = "http://localhost:5000/api";

  const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  // const setProductList = (data: Product[])=> {
  //   dispatch({ type: "setProductsList", payload: data })
  // }

  const getProducts = async (
    token: string
  ): Promise<{ message: string; productsData: [] }> => {
    return await axios
      .get(`${server}/products`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return { message: error };
      });
  };
  return (
    <AppContext.Provider
      value={{
        appState,
        getProducts,
        // setProductList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
