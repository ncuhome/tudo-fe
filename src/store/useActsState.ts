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
      isActsLoading: false,
    },
    (set) => ({
      clearActList: () => {
        set({ ActsList: [], isActsLoading: false });
      },
      fetchRecommendList: async () => {
        try {
          set({ isActsLoading: true });
          const responseData = await getRecommendActList();
          set({ ActsList: responseData });
          set({ isActsLoading: false });
        } catch (error) {
          set({ isActsLoading: false });
          console.log(error);
        }
      },
      fetchDuringList: async () => {
        try {
          set({ isActsLoading: true });
          const responseData = await getDuringActList();
          set({ ActsList: responseData });
          set({ isActsLoading: false });
        } catch (error) {
          set({ isActsLoading: false });
          console.log(error);
        }
      },
      fetchNotStartList: async () => {
        try {
          set({ isActsLoading: true });
          const responseData = await getNotStartActList();
          set({ ActsList: responseData });
          set({ isActsLoading: false });
        } catch (error) {
          set({ isActsLoading: false });
          console.log(error);
        }
      },
      fetchEndedList: async () => {
        try {
          set({ isActsLoading: true });
          const responseData = await getEndedActivity();
          set({ ActsList: responseData });
          set({ isActsLoading: false });
        } catch (error) {
          set({ isActsLoading: false });
          console.log(error);
        }
      },
      fetchListForTeam: async () => {
        try {
          set({ isActsLoading: true });
          const responseData = await getActListForTeam();
          set({ ActsList: responseData });
          set({ isActsLoading: false });
        } catch (error) {
          set({ isActsLoading: false });
          console.log(error);
        }
      },
      fetchPastActForTeam: async () => {
        try {
          set({ isActsLoading: true });
          const responseData = await getPastActListForTeam();
          set({ ActsList: responseData });
          set({ isActsLoading: false });
        } catch (error) {
          set({ isActsLoading: false });
          console.log(error);
        }
      },
    })
  )
);
