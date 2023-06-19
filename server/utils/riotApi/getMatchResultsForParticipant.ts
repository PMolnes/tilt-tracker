import { ParticipantMatchIds } from "./getParticipantsMatchIds";

export const getMatchResultsForParticipant = async (participantMatchIds: ParticipantMatchIds) => {
  const wins = await Promise.all(
    participantMatchIds.matchIds.map(
      async (matchId: string) => (await getMatchInfo(matchId, participantMatchIds.summonerName)).win
    )
  );

  return {
    summonerName: participantMatchIds.summonerName,
    wins: wins,
  };
};
