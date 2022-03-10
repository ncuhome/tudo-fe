import client from "../utils/request";

export const checkToken = async () => {
  const res = await client.get("/auth/token");
  const data = res.data;
  localStorage.setItem("tudo-token", data.token); //更新token
  return data.role;
};
