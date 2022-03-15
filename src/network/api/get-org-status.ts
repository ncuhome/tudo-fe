import client from "../utils/request";

export const getOrgStatus = async () => {
  const res = await client.get("/auth/organization");
  return res.data
};
