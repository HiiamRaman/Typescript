import api from "../api/axios.api.ts";

interface LoginData {
  email: string;
  password: string;
}
interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  const res = await api.post("/auth/login", data);
  console.log(res)
  return res.data;
};

export const registerUser = async (data: RegisterData) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};
