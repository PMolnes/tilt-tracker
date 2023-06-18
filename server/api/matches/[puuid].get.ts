import axios from "axios";

export default defineEventHandler(async (event) => {
  const puuid = event.context.params?.puuid;

  if (!puuid) {
    sendError(event, createError({ statusCode: 400, statusMessage: "Invalid params." }));
  }

  try {
    const matchIds = await getMatchIds(puuid!);
    return matchIds;
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
