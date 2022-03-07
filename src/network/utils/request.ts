import axios, { AxiosResponse } from "axios";
const client = axios.create({
  baseURL: "http://tudo-api-test.ncuos.com",
  timeout: 10000,
});

client.interceptors.request.use(
  (config) => {
    console.log("请求拦截");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    console.log("响应拦截")
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
// const onResFullFilled = (res: AxiosResponse) => {
//   return Promise.resolve(res)
// };

// request.interceptors.response.use(onResFullFilled);
