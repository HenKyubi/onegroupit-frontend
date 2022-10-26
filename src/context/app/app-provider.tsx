import { useReducer } from "react";
import { AppState } from "../../interfaces/types";
import { AppContext } from "./app-context";
import { AppReducer } from "./app-reducer";

const INITIAL_STATE: AppState = {
  avatar: "",
  email: "",
  password: "",
  actualDate: new Date(),
  lastLogging: new Date(),
  logged: false,
};

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}
export const AppProvider = ({ children }: Props) => {
  const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  const login = () => {
    dispatch({ type: "login" });
  };
  const saveOnLocalStorage = () => {
    dispatch({ type: "saveOnLocalStorage" });
  };
  const encryptPassword = (password: string) => {
    dispatch({ type: "encryptPassword", payload: { password } });
  };
  const unencryptPassword = () => {
    dispatch({ type: "unencryptPassword" });
  };
  const closeSession = () => {
    dispatch({ type: "closeSession" });
  };
  return (
    <AppContext.Provider
      value={{
        appState,
        login: login,
        saveOnLocalStorage: saveOnLocalStorage,
        encryptPassword: encryptPassword,
        unencryptPassword: unencryptPassword,
        closeSession: closeSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
