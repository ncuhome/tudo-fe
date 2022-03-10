import { toastSth } from "@/App";
import { checkToken } from "./check-token";
import client from "../utils/request";
import { ILoginRes, IuserInfo } from "@/interface/";

export const login = async (userInfo: IuserInfo) => {
  const res = await client.post("/login", {
    username: userInfo.username,
    password: userInfo.password,
  });
  toastSth("success", "登陆成功", { theme: "colored" });
  localStorage.setItem("tudo-token", res.data.token); //设置token
  try{
    const role: any = checkToken();
    localStorage.setItem("user-role", role); //设置角色
  }catch(error){
    console.log(error)
  }
  // return role;
};
