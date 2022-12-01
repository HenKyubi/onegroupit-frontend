import axios from "axios";

import { Product } from "../interfaces/types";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (
  email: string,
  password: string
): Promise<{
  userData: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
  };
  message: string;
}> => {
  return await axios
    .post(`${API_URL}/auth/signin`, { email, password })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<{ message: string }> => {
  return await axios
    .post(`${API_URL}/auth/signup`, {
      firstName,
      lastName,
      email,
      password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const registerNewProduct = async (
  productData: Product,
  token: string
): Promise<{ message: string }> => {
  return await axios
    .post(
      `${API_URL}/products`,
      {
        ...productData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { message: error };
    });
};

export const deleteProduct = async (
  idProduct: string,
  token: string
): Promise<{
  message: string;
}> => {
  return await axios
    .delete(`${API_URL}/products/${idProduct}`, {
      headers: {
        "x-access-token": token,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const modifyProduct = async (
  productData: Product,
  token: string
): Promise<{
  message: string;
}> => {
  return await axios
    .put(
      `${API_URL}/products/${productData._id}`,
      {
        ...productData,
        dateOfExpiration: productData.dateOfExpiration.toISOString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
