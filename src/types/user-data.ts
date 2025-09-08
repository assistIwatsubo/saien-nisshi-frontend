import { HelperCharacter, AppMode } from ".";

export type UserData = {
  id: string;
  name: string;
  email: string;
  token: string; // Passportアクセストークン
};

export type UserProfile = {
  appMode: AppMode;
  proLevel: number;
  beginnerLevel: number;
  nickname: string;
  favoriteCrop: string;
  iconUrl: string;
  helperCharacter: HelperCharacter;
  region?: string;

  registeredAt: string; // ユーザー登録日（ISO8601文字列）

  // フロント表示用の「現在のモード開始日」
  currentAppModeStartedAt?: string;
};
