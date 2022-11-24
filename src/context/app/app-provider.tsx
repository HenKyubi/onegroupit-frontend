import { useReducer } from "react";
import { AppState } from "../../interfaces/types";
import { AppContext } from "./app-context";
import { AppReducer } from "./app-reducer";

const INITIAL_STATE: AppState = {
  firstName: "",
  lastName: "",
  email: "",
  token: "",
};

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}
export const AppProvider = ({ children }: Props) => {
  const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  const login = () => {
    dispatch({ type: "login" });
  };
  const closeSession = () => {
    dispatch({ type: "closeSession" });
  };
  return (
    <AppContext.Provider
      value={{
        appState,
        login: login,
        closeSession: closeSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
