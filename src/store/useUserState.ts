//管理token,role,username,(头像)
import create from "zustand";
import { combine } from "zustand/middleware";

export const useUserState = create(
  combine(
    {
      token: localStorage.getItem("tudo-token"),
      role: localStorage.getItem("user-role"),
      username: "",
    },
    (set) => ({
      fetchUserInfo: async () => {
        const token = localStorage.getItem("tudo-token");
        if (token === null) {
          return null;
        } else {
          //获取用户信息 等接口ing
          set({ token: localStorage.getItem("tudo-token") });
          set({ role: localStorage.getItem("user-role") });
        }
      },
    })
  )
);
