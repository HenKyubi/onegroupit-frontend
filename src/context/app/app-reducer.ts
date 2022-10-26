import { AppState } from "../../interfaces/types";
type AppActions =
  | { type: "saveOnLocalStorage" }
  | { type: "encryptPassword"; payload: { password: string } }
  | { type: "unencryptPassword" }
  | { type: "closeSession" }
  | { type: "login" };

export const AppReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "saveOnLocalStorage":
      return { ...state };
    case "encryptPassword":
      return { ...state };
    case "unencryptPassword":
      return { ...state };
    case "closeSession":
      return { ...state };
    case "login":
      return { ...state };
    default:
      return state;
  }
};
