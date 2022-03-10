import { toastSth } from "@/App";
import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://tudo-api-test.ncuos.com",
  timeout: 10000,
});

client.interceptors.request.use(
  (config) => {
    console.log("请求拦截");
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
    // toastSth("success", response.data.message, { theme: "colored" });
    console.log("成功响应拦截");
    return response.data;
  },
  (error) => {
    console.log("错误响应拦截");
    console.log(error.response);
    toastSth("error", error.response.data.message, { theme: "colored" });
    return Promise.reject(error);
  }
);

export default client;
// const onResFullFilled = (res: AxiosResponse) => {
//   return Promise.resolve(res)
// };

// request.interceptors.response.use(onResFullFilled);
