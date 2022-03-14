import create from "zustand";
import { combine } from "zustand/middleware";

export const useOnEdit = create(
  combine(
    {
      onEdit: false,
    },
    (set) => ({
      setOnEdit: (newState: boolean) => {
        set({ onEdit: newState });
      },
    })
  )
);
