export interface GetProductsResponse {
  message: string;
  productsData: ProductDataResponse[];
}

export interface ProductDataResponse {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  dateOfExpiration: Date;
  calification: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
