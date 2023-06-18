import { SummonerInfo } from "../../../models/SummonerInfo";

export const getParticipantsMatchIds = async (
  summonerInfos: SummonerInfo[]
): Promise<
  {
    summonerName: string;
    matchIds: string[];
  }[]
> => {
  return await Promise.all(
    summonerInfos.map(async (summoner) => {
      return {
        summonerName: summoner.name,
        matchIds: await getMatchIds(summoner.puuid, 10),
      };
    })
  );
};
