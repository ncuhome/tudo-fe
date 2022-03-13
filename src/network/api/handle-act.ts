import client from "../utils/request";
import { toastSth } from "@/App";
import { IActs } from "@/interface";

export const setNewAct = async (data: IActs) => {
  await client.post("/auth/activity", {...data});
  toastSth("success", "发布成功!", { theme: "colored" });
};

export const amendAct = async () => {
  client.put("/auth/activity", {});
};

export const deleteAct = async () => {
  client.delete("/auth/activity", {});
};
