import { CurrentGameParticipant } from "./CurrentGameParticipant";

export interface CurrentGameInfo {
  gameId: number;
  mapId: number;
  gameMode: string;
  gameType: string;
  gameQueueConfigId: number;
  participants: CurrentGameParticipant[];
  observers: {
    encryptionKey: string;
  };
  platformId: string;
  bannedChampions: [];
  gameStartTime: number;
  gameLength: number;
}
