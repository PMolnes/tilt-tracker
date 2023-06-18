export const getMatchInfo = async (matchId: string, summonerName: string): Promise<Participant> => {
  return await axiosInstance
    .get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data.info.participants.find((p: Participant) => p.summonerName === summonerName);
      }
    })
    .catch((error) => {
      throw error;
    });
};
