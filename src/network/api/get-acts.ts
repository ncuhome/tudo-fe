import { toastSth } from "@/App";
import client from "../utils/request";

const presentTimeStrap = new Date().getTime();

export const getRecommendActList = async () => {
  const res = await client.get(`/recommend-activity?pre=8`);
  return res.data;
};

export const getActListForTeam = async () => {
  const res = await client.get(`/auth/org/not-ended-activity?pre=${presentTimeStrap}`)
  return res.data
}

// export const getPastActListForTeam = async = () => {

// }