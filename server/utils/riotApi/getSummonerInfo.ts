import { SummonerInfo } from "../../../models/SummonerInfo";

export const getSummonerInfo = async (summonerName: string): Promise<SummonerInfo> => {
  return await axiosInstance
    .get(`/summoner/v4/summoners/by-name/${summonerName}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
    });
};
