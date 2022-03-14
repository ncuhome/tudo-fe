import { toastSth } from "@/App";
import client from "../utils/request";

const presentTimeStrap = new Date().getTime();

export const getDuringActList = async () => {
  const res = await client.get(
    `/during-activity?pre=${presentTimeStrap}&now=${presentTimeStrap}`
  );
  return res.data;
};

export const getNotStartActList = async () => {
  const res = await client.get(`/not-start-activity?pre=${presentTimeStrap}`);
  return res.data;
};

export const getRecommendActList = async () => {
  const res = await client.get(`/recommend-activity?pre=${presentTimeStrap}`);
  return res.data;
};

export const getEndedActivity = async () => {
  const res = await client.get(`/ended-activity?pre=${presentTimeStrap}`);
  return res.data;
};

export const getActListForTeam = async () => {
  const res = await client.get(
    `/auth/org/not-ended-activity?pre=${presentTimeStrap}`
  );
  return res.data;
};

export const getPastActListForTeam = async () => {
  const res = await client.get(
    `/auth/org/not-ended-activity?pre=${presentTimeStrap}`
  );
  return res.data;
};
