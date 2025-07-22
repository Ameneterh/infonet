import { axiosInstance } from "./axiosInstance";

// register user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/backend/users/register",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// login in user
export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/backend/users/login", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
