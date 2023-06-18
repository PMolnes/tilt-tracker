import { CurrentGameParticipant } from "../../../models/match/CurrentGameParticipant";

export const getSummonerInfoForParticipants = async (currentGameParticipants: CurrentGameParticipant[]) => {
  return await Promise.all(currentGameParticipants.map((participant) => getSummonerInfo(participant.summonerName)));
};
