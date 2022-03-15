import create from "zustand";
import { combine } from "zustand/middleware";
import {
  getDuringActList,
  getEndedActivity,
  getNotStartActList,
  getPastActListForTeam,
  getRecommendActList,
} from "@/network/api/get-acts";
import { getActListForTeam } from "@/network/api/get-acts";

export const useActsState = create(
  combine(
    {
      ActsList: [],
    },
    (set) => ({
      clearActList: () => {
        set({ ActsList: [] });
      },
      fetchRecommendList: async () => {
        const responseData = await getRecommendActList();
        set({ ActsList: responseData });
      },
      fetchDuringList: async () => {
        const responseData = await getDuringActList();
        set({ ActsList: responseData });
      },
      fetchNotStartList: async () => {
        const responseData = await getNotStartActList();
        set({ ActsList: responseData });
      },
      fetchEndedList: async () => {
        const responseData = await getEndedActivity();
        set({ ActsList: responseData });
      },
      fetchListForTeam: async () => {
        const responseData = await getActListForTeam();
        set({ ActsList: responseData });
      },
      fetchPastActForTeam: async () => {
        const responseData = await getPastActListForTeam();
        set({ ActsList: responseData });
      },
    })
  )
);
