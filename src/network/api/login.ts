import { toastSth } from "@/App";
import { checkToken } from "./check-token";
import client from "../utils/request";
import { ILoginRes, IUserInfo } from "@/interface/";

export const login = async (userInfo: IUserInfo) => {
  const res = await client.post("/login", {
    username: userInfo.username,
    password: userInfo.password,
  });
  toastSth("success", "登陆成功", { theme: "colored" });
  localStorage.setItem("tudo-token", res.data.token); //设置token
  localStorage.setItem("user-id", res.data.id)
  try{
    const role: any = await checkToken();
    localStorage.setItem("user-role", role); //设置角色
  }catch(error){
    console.log(error)
  }
};
