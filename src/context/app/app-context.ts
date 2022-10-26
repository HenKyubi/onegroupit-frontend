import { createContext } from "react";
import { AppState } from "../../interfaces/types";

type AppContextProps = {
  appState: AppState;
  login: () => void;
  saveOnLocalStorage: (username: string, password: string, date: Date) => void;
  encryptPassword: (password: string) => void;
  unencryptPassword: (passwordCrypt: string) => void;
  closeSession: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
