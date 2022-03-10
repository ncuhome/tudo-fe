//管理token,role,username,(头像)
import create from "zustand"
import { combine } from "zustand/middleware"

export const useUserState = create(
  combine(
    {
      token: "",
      role: "",
      username: ""
    },
    set => ({
      fetchUserInfo:async () => {
        // set({

        // })
        const token = localStorage.getItem("tudo-token")
        if(token === null) {
          return null
        }else {
          
        }
      },
    })
  )
)