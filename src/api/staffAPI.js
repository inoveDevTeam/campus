import { client } from "./client.js";

export const staffAPI = {
  get: async function () {
    const response = await client.request({
      url: `/api/public/staff/`,
      method: "GET",
    });
    if (response) {
      return response.data;
    }
  },
};
