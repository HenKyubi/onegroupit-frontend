import axios from "axios";

const server = "http://localhost:5000/api";

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
    .post(`${server}/auth/signin`, { email, password })
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
    .post(`${server}/auth/signup`, {
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
  name: string,
  price: number,
  imgUrl: string,
  dateOfExpiration: Date,
  calification: number,
  token: string
): Promise<{ message: string }> => {
  return await axios
    .post(
      `${server}/products`,
      {
        name,
        price,
        imgUrl,
        dateOfExpiration,
        calification,
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
    .delete(`${server}/products/${idProduct}`, {
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
