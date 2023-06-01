import { AxiosError } from "axios";
import axiosInstance from "./riotAxiosInstance";
import { SummonerInfo } from "../../models/SummonerInfo";
import { CurrentGameInfo } from "../../models/match/CurrentGameInfo";

const getSummonerInfo = async (summonerName: string): Promise<SummonerInfo> => {
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

const getCurrentMatch = async (
  summonerId: string
): Promise<CurrentGameInfo> => {
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

export { getSummonerInfo, getCurrentMatch };
