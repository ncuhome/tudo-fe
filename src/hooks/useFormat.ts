import { format, toDate } from "date-fns";

export const useFormat = (timeStrap: string) => {
  const num = parseInt(timeStrap);
  const date = toDate(num);
  if (num) {
    return format(date, "yyyy M.d k:mm");
  } else {
    return 
  }
};
