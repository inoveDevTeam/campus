import { client } from "./client.js";

export const cuadroHonorAPI = {
  get: async function () {
    const response = await client.request({
      url: `/api/public/cuadro-honor/`,
      method: "GET",
    });
    if (response) {
      return response.data;
    }
  },
};
