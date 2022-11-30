import { createContext } from "react";
import { AppState, Product } from "../../interfaces/types";

type AppContextProps = {
  appState: AppState;
  getProducts: (token: string) => Promise<{ message: string }>;
  setProductsList: (productsList: Product[]) => void;
  setHasFilters: (hasFilters: boolean) => void;
  setFilterProductsList: (productsList: Product[]) => void;
  closeSession: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
