import request from "../utils/https";

export const testApi = () => {
  return request({
    url: "/test",
    method: "GET",
  });
};
