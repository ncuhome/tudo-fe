//管理token,role,username,(头像)
import { getUserInfo } from "@/network/api/get-user-info";
import create from "zustand";
import { combine } from "zustand/middleware";
import { IGetUserInfoRes } from "@/interface";

export const useUserState = create(
  combine(
    {
      token: localStorage.getItem("tudo-token"),
      role: localStorage.getItem("user-role"),
      nickname: "无名氏",
    },
    (set) => ({
      fetchUserInfo: async () => {
        const token = localStorage.getItem("tudo-token");
        if (token === null) {
          return null;
        } else {
          //获取用户信息 等接口ing
          const responseData: IGetUserInfoRes = await getUserInfo();
          set({ nickname: responseData.nickname });
          set({ token: localStorage.getItem("tudo-token") });
          set({ role: localStorage.getItem("user-role") });
        }
      },
    })
  )
);
