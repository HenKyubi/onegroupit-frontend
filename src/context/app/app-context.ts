import { createContext } from "react";
import { AppState } from "../../interfaces/types";

type AppContextProps = {
  appState: AppState;
  login: () => void;
  closeSession: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
