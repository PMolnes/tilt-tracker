import axios from "axios";
import { getMatchInfo } from "../../../../../service/riotApi";

export default defineEventHandler(async (event) => {
  const matchId = event.context.params?.matchId;
  const summonerName = event.context.params?.summonerName;

  if (!matchId || !summonerName) {
    sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Bad request" })
    );
  }

  try {
    const win = await getMatchInfo(matchId!, summonerName!);
    return win;
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);
    sendError(
      event,
      createError({
        statusCode: isAxiosError ? error.response?.status : 500,
        statusMessage: isAxiosError
          ? error.response?.statusText
          : "Internal Server Error - Riot Api",
      })
    );
  }
});
