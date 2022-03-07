import axios,{ AxiosResponse } from "axios";
import client from "../utils/request";
import { ILoginRes } from "@/interface/login-res";

interface userInfo {
  username: string;
  password: string;
}

export const login = (userInfo: userInfo) => {
  console.log("!")
  client.post("/login", {
    username: userInfo.username,
    password: userInfo.password
  })
  .then((res) => {
    localStorage.setItem("tudo-token",res.data.data.token)
  })
  .catch((err) => {
    console.log(err)
    return err
  })
}