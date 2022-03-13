import create from "zustand";
import { combine } from "zustand/middleware";
import { IActs } from "@/interface";
import { getRecommendActList } from "@/network/api/get-acts";
import { getActListForTeam } from "@/network/api/get-acts";

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
          ActsList: responseData.Data,
        });
      },
      fetchListForTeam: async () => {
        const responseData = await getActListForTeam();
        set({ ActsList: responseData });
      },
    })
  )
);
