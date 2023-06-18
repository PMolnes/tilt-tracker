export const getMatchIds = async (puuid: string, maxAmountOfMatches: number = 10): Promise<string[]> => {
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
