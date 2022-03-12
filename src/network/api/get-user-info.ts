import client from "../utils/request";

export const getUserInfo = async () => {
  const res = await client.get(
    "/user-info?id=" + localStorage.getItem("user-id")
  );
  // console.log(res.data)
  return res.data;
};
