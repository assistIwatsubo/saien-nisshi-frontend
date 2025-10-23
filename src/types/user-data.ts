import { AppMode } from ".";

export type MeData = {
  user_id: string;
  user_slug: string,
  user_name: string;
  nickname?: string;
  favorite_crop?: FavoriteCrop;
  image_url?: string;
  prefecture?: string;
  followings?: UserData[];
  current_mode_data: CurrentModeData,
};

export type UserData = {
  user_slug: string,
  user_name: string;
  nickname?: string;
  favorite_crop?: FavoriteCrop;
  image_url?: string;
  prefecture?: string;
  current_mode_data: CurrentModeData,
};

export type FavoriteCrop = {
  crop_id: number;
  crop_name: string;
}

export type CurrentModeData = {
  duration_days: number;
  mode: AppMode;
}
