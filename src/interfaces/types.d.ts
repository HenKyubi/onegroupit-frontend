export interface AppState {
  userData: userData;
  productsList: Array<Product>;
  productsListFiltred: Array<Product>;
  hasActiveFilters: boolean;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  dateOfExpiration: Date;
  calification: number;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type formProduct = {
  name: string;
  price: number;
  imgUrl: string;
  calification: number;
  dateOfExpiration: string;
};

export type userData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
};
