import client from "../utils/request";
import { toastSth } from "@/App";

export const setOrgAccountInfo = async (password: string) => {
  await client.post("/auth/organization", {
    logo_url: "",
    password: password,
  });
  toastSth("success", "修改成功", { theme: "colored" });
};
