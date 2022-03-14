import client from "../utils/request";
import { toastSth } from "@/App";
import { IActs } from "@/interface";

export const setNewAct = async (data: IActs) => {
  await client.post("/auth/activity", { ...data });
  toastSth("success", "发布成功!", { theme: "colored" });
};

export const amendAct = async (data: IActs, actID: string) => {
  await client.put("/auth/activity?id=" + actID, { ...data });
  toastSth("success", "修改成功!", { theme: "colored" });
};

export const deleteAct = async (actID: string) => {
  await client.delete("/auth/activity?id=" + actID);
  toastSth("success", "删除成功!", { theme: "colored" });
};
