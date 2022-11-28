import { createContext } from "react";
import { AppState } from "../../interfaces/types";

type AppContextProps = {
  appState: AppState;
  getProducts: (token: string) => Promise<{message: string;}>;
  // setProductList: () => void;
  // login: () => void;
  // closeSession: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
