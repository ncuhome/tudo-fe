import { toastSth } from "@/App";
import client from "../utils/request";

const presentTimeStrap = new Date().getTime();

export const getRecommendActList = async () => {
  console.log(presentTimeStrap);
  const res = await client.get(`/recommend-activity?pre=8`);
  return res.data;
  // const res = client.get(`/recommend-activity?pre=1646896073265  `)
};
