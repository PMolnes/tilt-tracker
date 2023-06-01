import { Participant } from "./Participant";

export interface CurrentGameInfo {
  gameId: number;
  mapId: number;
  gameMode: string;
  gameType: string;
  gameQueueConfigId: number;
  participants: Participant[];
  observers: {
    encryptionKey: string;
  };
  platformId: string;
  bannedChampions: [];
  gameStartTime: number;
  gameLength: number;
}
