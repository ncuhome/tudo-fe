import { toastSth } from "@/App";
import client from "../utils/request";

const presentTimeStrap = new Date().getTime()

export const getRecommendActList = () => {
  console.log(presentTimeStrap)
  const res = client.get(`/recommend-activity?pre=${presentTimeStrap}`)
  // const res = client.get(`/recommend-activity?pre=1646896073265  `)
}