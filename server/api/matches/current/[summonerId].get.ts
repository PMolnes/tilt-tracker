import axios from "axios";

export default defineEventHandler(async (event) => {
  const summonerId = event.context.params?.summonerId;

  if (!summonerId) {
    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Params must contain summonerId",
      })
    );
  }

  try {
    const currentGameInfo = await getCurrentMatch(summonerId!);

    // Get SummonerInfo for all participants
    const participantsInformation = await getSummonerInfoForParticipants(currentGameInfo.participants);

    // Get matchIds for all participants
    const participantMatchIds = await getParticipantsMatchIds(participantsInformation);

    //TODO: Get match info for all matches

    const matchResultForParticipant = await getMatchResultsForParticipant(participantMatchIds[0]);
    return matchResultForParticipant;

    return participantMatchIds;
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);
    sendError(
      event,
      createError({
        statusCode: isAxiosError ? error.response?.status : 500,
        statusMessage: isAxiosError ? error.response?.statusText : "Internal Server Error - Riot API",
      })
    );
  }
});
