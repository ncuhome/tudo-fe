import create from "zustand";
import { combine } from "zustand/middleware";
import { IActs } from "@/interface";
import { getRecommendActList } from "@/network/api/get-recommend-acts";

interface IActlistAct extends IActs {
  digest: string;
  id: number;
  user_id: number;
}

export const useActsState = create(
  combine(
    {
      ActsList: [],
    },
    (set) => ({
      fetchRecommendList: async () => {
        const responseData = await getRecommendActList();
        // console.log(responseData.Data)
        set({
          ActsList:responseData.Data
        })
      },
    })
  )
);
