import create from "zustand"
import { combine } from "zustand/middleware"
// import { getUserInfo } from "@/networks/api/user/userInfo"
// import { IUserInfo } from "@/networks/interfaces/userInfo"
// import { AxiosError } from "axios"
// import { message } from "antd"

export interface IUserState extends Partial<IUserInfo> {
  loadingInfo: boolean
  online: boolean
}

export const useUserState = create(
  combine(
    {
      username: "孙翔宇",
      loadingInfo: true,
      online: false,
    } as IUserState,
    set => ({
      fetchUserInfo: async () => {
        set({
          loadingInfo: true,
        })
        const token = localStorage.getItem("us-token")
        if (token === null) {
          set({
            loadingInfo: false,
          })
          return
        } else {
          try {
            const userInfo = await getUserInfo()
            set({
              ...userInfo,
              loadingInfo: false,
              online: true,
            })
          } catch (err) {
            if ((err as AxiosError).response?.status === 403) {
              message.warn("登录态状过期，请重新登录")
              localStorage.removeItem("us-token")
              set({
                loadingInfo: false,
              })
            }
          }
        }
      },
      userLogOut: () => {
        localStorage.removeItem("us-token")
        localStorage.removeItem("us-role")
        set({
          online: false,
        })
        message.success("已退出!")
      },
    })
  )
)
