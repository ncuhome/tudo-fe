import create from "zustand";
import { combine } from "zustand/middleware";
import { setNewAct, amendAct, deleteAct } from "@/network/api/handle-act";
import { IActBasicInfoData } from "@/interface";

export const useActDetailState = create(
  combine(
    {
      actName: "",
      actLocation: "",
      startTime: NaN,
      endTime: NaN,
      author: "",
      content: "",
    },
    (set) => ({
      setActBasicInfo: (BasicData: IActBasicInfoData) => {
        set({ actName: BasicData.actName, actLocation: BasicData.actLocation });
      },
      setActStartTime: (startTime: number) => {
        set({ startTime });
      },
      setActEndTime: (endTime: number) => {
        set({ endTime });
      },
      setActContent: (content: string) => {
        set({ content });
      },
    })
  )
);
