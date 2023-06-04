import axios from "axios";
import { getCurrentMatch } from "../../../service/riotApi";

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
    return currentGameInfo;
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);
    sendError(
      event,
      createError({
        statusCode: isAxiosError ? error.response?.status : 500,
        statusMessage: isAxiosError
          ? error.response?.statusText
          : "Internal Server Error - Riot API",
      })
    );
  }
});
