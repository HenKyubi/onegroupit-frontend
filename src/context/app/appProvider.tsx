import axios from "axios";
import { useReducer } from "react";
import { AppState } from "../../interfaces/types";
import { AppContext } from "./appContext";
import { AppReducer } from "./appReducer";

interface props {
  children: JSX.Element | Array<JSX.Element>;
}

const INITIAL_STATE: AppState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  productsList: [],
};

export const AppProvider = ({ children }: props) => {
  const server = "http://localhost:5000/api";

  const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const getProducts = async (token: string): Promise<{ message: string }> => {
    return await axios
      .get(`${server}/products`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        dispatch({
          type: "getProducts",
          payload: { productsList: res?.data?.productsData },
        });
        return { message: "Success" };
      })
      .catch((error) => {
        return { message: error };
      });
  };

  return (
    <AppContext.Provider value={{ appState, getProducts }}>
      {children}
    </AppContext.Provider>
  );
};
