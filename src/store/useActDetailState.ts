import create from "zustand";
import { combine } from "zustand/middleware";
import { setNewAct, amendAct, deleteAct } from "@/network/api/handle-act";
import { IActBasicInfoData, IActFullInfoData } from "@/interface";

export const useActDetailState = create(
  combine(
    {
      actName: "",
      actLocation: "",
      startTime: "",
      endTime: "",
      author: "",
      content: "",
    },
    (set) => ({
      setActBasicInfo: (BasicData: IActBasicInfoData) => {
        set({ actName: BasicData.actName, actLocation: BasicData.actLocation });
      },
      setActStartTime: (startTime: number) => {
        set({ startTime: JSON.stringify(startTime) });
      },
      setActEndTime: (endTime: number) => {
        set({ endTime: JSON.stringify(endTime) });
      },
      setActContent: (content: string) => {
        set({ content });
      },
      setActAfterFetch: (fullData: IActFullInfoData) => {
        set({
          actName: fullData.actName,
          actLocation: fullData.actLocation,
          startTime: fullData.startTime,
          endTime: fullData.endTime,
          author: fullData.author,
          content: fullData.content,
        });
      },
    })
  )
);
