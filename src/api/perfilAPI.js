import { client } from "./client.js";

export const perfilAPI = {
  get: async function (username) {
    const response = await client.request({
      url: `/api/perfil/${username}/`,
      method: "GET",
    });
    if (response) {
      return response.data;
    }
  },
};
