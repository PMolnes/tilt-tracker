import axios from "axios";

export default defineEventHandler(async (event) => {
  const summonerName = event.context.params?.name;

  if (!summonerName) {
    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Summoner name cannot be null",
      })
    );
  }

  // send request til riot api
  try {
    const summonerInfo = await getSummonerInfo(summonerName!);
    return summonerInfo;
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);
    sendError(
      event,
      createError({
        statusCode: isAxiosError ? error.response?.status : 500,
        statusMessage: isAxiosError ? error.response?.statusText : "Internal Server Error - Riot Api",
      })
    );
  }
});
