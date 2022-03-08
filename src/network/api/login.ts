import { toastSth } from "@/App";
import { checkToken } from "./check-token";
import client from "../utils/request";
import { ILoginRes, IuserInfo } from "@/interface/";

export const login = async (userInfo: IuserInfo) => {
  try {
    const res =  await client.post("/login", {
      username: userInfo.username,
      password: userInfo.password,
    });
    console.log(res)
    localStorage.setItem("tudo-token", res.data.token); //设置token
    const role = checkToken()
    return role
  } catch (error) {
    console.log("error")
  }
};
