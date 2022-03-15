import client from "../utils/request";
import { IGetUserInfoRes } from "@/interface";

export const getUserInfo = async (...arg: any) => {
  let userID;
  if (arg.length > 0) {
    userID = arg;
  } else {
    userID = localStorage.getItem("user-id");
  }
  const res: any = await client.get("/user-info?id=" + userID);
  const resData: IGetUserInfoRes = res.data;
  return resData;
};
