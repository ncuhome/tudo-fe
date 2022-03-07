import { toastSth } from "@/App";
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
      localStorage.setItem("tudo-token", res.data.data.token);
      toastSth("success", "test", { theme: "colored" });
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
