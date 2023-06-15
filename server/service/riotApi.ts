import axiosInstance from "./riotAxiosInstance";
import { SummonerInfo } from "../../models/SummonerInfo";
import { CurrentGameInfo } from "../../models/match/CurrentGameInfo";
import { CurrentGameParticipant } from "../../models/match/CurrentGameParticipant";

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

const getCurrentMatch = async (summonerId: string): Promise<CurrentGameInfo> => {
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

const getMatchIds = async (puuid: string, maxAmountOfMatches: number = 10): Promise<string[]> => {
  return await axiosInstance
    .get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
      params: {
        start: 0,
        count: maxAmountOfMatches,
        type: "ranked",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
    });
};

const getMatchInfo = async (matchId: string, summonerName: string): Promise<Participant> => {
  return await axiosInstance
    .get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data.info.participants.find((p: Participant) => p.summonerName === summonerName);
      }
    })
    .catch((error) => {
      throw error;
    });
};

/**
 * 1. Get summoner info for entered username
 * 2. Get current match encrypted summoner id
 * 3. For each summonerName in currentMatch.participants --> getSummonerInfo
 * 4. For each puuid get match ids
 * 5. Calculate loss percentage
 */

const getMostTiltedPlayer = async (currentGame: CurrentGameInfo) => {
  const summonerInfos: SummonerInfo[] = [];
  const matchIds: Map<string, string[]> = new Map();
  for (const p of currentGame.participants) {
    const summonerInfo = await getSummonerInfo(p.summonerName);
    summonerInfos.push(summonerInfo);
  }

  for (const summoner of summonerInfos) {
    const matchIdsForSummoner = await getMatchIds(summoner.puuid, 10);
    matchIds.set(summoner.name, matchIdsForSummoner);
  }

  // get match infos
};

const getSummonerInfoForParticipants = async (currentGameParticipants: CurrentGameParticipant[]) => {
  const participantsInformation: SummonerInfo[] = await Promise.all(
    currentGameParticipants.map((participant) => getSummonerInfo(participant.summonerName))
  );

  return participantsInformation;
};

export {
  getSummonerInfo,
  getCurrentMatch,
  getMostTiltedPlayer,
  getMatchIds,
  getMatchInfo,
  getSummonerInfoForParticipants,
};
