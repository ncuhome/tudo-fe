import client from "../utils/request";

export const checkToken = () => {
  console.log("check token quest");
  client
    .get("/auth/token")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
