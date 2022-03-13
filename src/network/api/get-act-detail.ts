import client from "../utils/request";
import { IActDetail } from "@/interface";

export const getActDetail = async (id: string | null): Promise<IActDetail> => {
  const res: any = await client.get(`/activity?id=${id}`);
  console.log(res.data);
  return res.data;
};
