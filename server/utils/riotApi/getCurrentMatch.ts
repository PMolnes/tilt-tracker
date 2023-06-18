import { CurrentGameInfo } from "../../../models/match/CurrentGameInfo";

export const getCurrentMatch = async (summonerId: string): Promise<CurrentGameInfo> => {
  return await axiosInstance
    .get(`/spectator/v4/active-games/by-summoner/${summonerId}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
    });
};
