import { toastSth } from "@/App";
import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://tudo-api-test.ncuos.com",
  timeout: 10000,
});

client.interceptors.request.use(
  (config) => {
    const token: string | null = localStorage.getItem("tudo-token");
    if (config.headers && token) config.headers.token = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error.response);
    toastSth("error", error.response.data.message, { theme: "colored" });
    return Promise.reject(error);
  }
);

export default client;
