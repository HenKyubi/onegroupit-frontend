import { createContext } from "react";
import { AppState } from "../../interfaces/types";

type AppContextProps = {
  appState: AppState;
  // setProductList: () => void;
  // login: () => void;
  // closeSession: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
