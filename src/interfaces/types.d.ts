export interface AppState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  productList: Product[];
}

export interface Product {
  name: string;
  price: number;
  imgUrl: string;
  dateOfExpiration: Date;
  calification: number;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
