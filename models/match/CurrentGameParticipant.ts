export interface CurrentGameParticipant {
  teamId: number;
  spell1Id: number;
  spell2Id: number;
  championId: number;
  profileIconId: number;
  summonerName: string;
  bot: boolean;
  summonerId: string;
  gameCustomizationObjects: [];
  perks: {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
  };
}
