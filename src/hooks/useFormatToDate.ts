import { toDate } from "date-fns";

export const useFormatToDate = (timeStrap: string) => {
  const num = parseInt(timeStrap);
  const date = toDate(num);
  if (num) {
    return date;
  } else {
    return
  }
};
