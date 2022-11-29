import { AppState, Product } from "../../interfaces/types";

type AppActions =
  | { type: "setProductsList"; payload: { productsList: Product[] } }
  | {
      type: "setFilterProductsList";
      payload: { filterProductsList: Product[] };
    }
  | { type: "getProducts"; payload: { productsList: Product[] } }
  | { type: "setHasFilters"; payload: { hasFilters: boolean } };

export const AppReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "getProducts":
      return { ...state, productsList: action.payload.productsList };
    case "setProductsList":
      return { ...state, productsList: action.payload.productsList };
    case "setFilterProductsList":
      return {
        ...state,
        productsListFiltred: action.payload.filterProductsList,
      };
    case "setHasFilters":
      return { ...state, hasActiveFilters: action.payload.hasFilters };
    default:
      return state;
  }
};
