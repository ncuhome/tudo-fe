import client from "../utils/request";
import { IGetUserInfoRes } from "@/interface";

export const getUserInfo = async () => {
  const res: any = await client.get(
    "/user-info?id=" + localStorage.getItem("user-id")
  );
  const resData: IGetUserInfoRes = res.data;
  return resData;
};
