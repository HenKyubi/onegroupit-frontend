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
