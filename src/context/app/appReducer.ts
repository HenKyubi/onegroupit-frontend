import { AppState, Product, userData } from "../../interfaces/types";

type AppActions =
  | { type: "setUserData"; payload: { userData: userData } }
  | { type: "setProductsList"; payload: { productsList: Product[] } }
  | {
      type: "setFilterProductsList";
      payload: { filterProductsList: Product[] };
    }
  | { type: "setHasFilters"; payload: { hasFilters: boolean } }
  | { type: "closeSession" };

const INITIAL_STATE: AppState = {
  userData: { id: "", firstName: "", lastName: "", email: "", token: "" },
  productsList: [],
  productsListFiltred: [],
  hasActiveFilters: false,
};

export const AppReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "setUserData":
      return { ...state, userData: action.payload.userData };
    case "setProductsList":
      return { ...state, productsList: action.payload.productsList };
    case "setFilterProductsList":
      return {
        ...state,
        productsListFiltred: action.payload.filterProductsList,
      };
    case "setHasFilters":
      return { ...state, hasActiveFilters: action.payload.hasFilters };
    case "closeSession":
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
