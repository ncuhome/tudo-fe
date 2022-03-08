import { toastSth } from "@/App";
import { checkToken } from "./check-token";
import client from "../utils/request";
import { ILoginRes, IuserInfo } from "@/interface/";

export const login = (userInfo: IuserInfo) => {
  console.log("!");
  client
    .post("/login", {
      username: userInfo.username,
      password: userInfo.password,
    })
    .then((res) => {
      localStorage.setItem("tudo-token", res.data.token);
      toastSth("success", "test", { theme: "colored" });
      checkToken()
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
