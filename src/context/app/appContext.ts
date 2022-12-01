import { createContext } from "react";
import { AppState, Product, userData as UserData } from "../../interfaces/types";

type AppContextProps = {
  appState: AppState;
  setUserData: (userData: UserData) => void;
  getProducts: (token: string) => Promise<{ message: string, productsList: Product[] }>;
  setProductsList: (productsList: Product[]) => void;
  setHasFilters: (hasFilters: boolean) => void;
  setFilterProductsList: (productsList: Product[]) => void;
  closeSession: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
