import { SummonerInfo } from "../../../models/SummonerInfo";

export interface ParticipantMatchIds {
  summonerName: string;
  matchIds: string[];
}

export const getParticipantsMatchIds = async (summonerInfos: SummonerInfo[]): Promise<ParticipantMatchIds[]> => {
  return await Promise.all(
    summonerInfos.map(async (summoner) => {
      return {
        summonerName: summoner.name,
        matchIds: await getMatchIds(summoner.puuid, 10),
      };
    })
  );
};
