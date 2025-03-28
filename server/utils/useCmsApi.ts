import { ofetch } from "ofetch";

export const useCmsApi = () => {
  return ofetch.create({
    baseURL: "https://cms.zeedi.co",
    headers: {
      Authorization: "Bearer WVDpcxmHAG5Bd3EZjLPTgv0oXEZkOKuV",
    },
  });
}
