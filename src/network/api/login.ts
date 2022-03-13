import { toastSth } from "@/App";
import { getUserInfo } from "./get-user-info";
import { checkToken } from "./check-token";
import client from "../utils/request";
import { ILoginRes, IUserInfo, IGetUserInfoRes } from "@/interface/";

export const login = async (userInfo: IUserInfo) => {
  const res = await client.post("/login", {
    username: userInfo.username,
    password: userInfo.password,
  });
  toastSth("success", "登陆成功", { theme: "colored" });
  localStorage.setItem("tudo-token", res.data.token); //设置token
  localStorage.setItem("user-id", res.data.id);
  try {
    const role: string = await checkToken();
    const responseData: IGetUserInfoRes = await getUserInfo();
    localStorage.setItem("user-role", role); //设置角色
    localStorage.setItem("nickname", responseData.nickname); //设置用户名
  } catch (error) {
    console.log(error);
  }
};
