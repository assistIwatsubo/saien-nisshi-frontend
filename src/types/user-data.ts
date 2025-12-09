import { AppMode } from ".";

export type MeData = {
  userId: string;
  userSlug: string;
  userName: string;
  nickname?: string;
  favoriteCrop?: FavoriteCrop;
  imageUrl?: string;
  prefecture?: string;
  followings?: UserData[];
  currentModeData: CurrentModeData;
};

export type UserData = {
  userSlug: string;
  userName: string;
  nickname?: string;
  favoriteCrop?: FavoriteCrop;
  imageUrl?: string;
  prefecture?: string;
  currentModeData: CurrentModeData;
};

export type FavoriteCrop = {
  cropId: number;
  cropName: string;
};

export type CurrentModeData = {
  durationDays: number;
  mode: AppMode;
};

export type FieldData = {
  id: number;
  name: string;
  address: string;
  memo: string;
};

export type LayoutData = {
  layoutId: number;
  year: number;
  title: string;
  fieldId: number;
  fieldName: string;
  direction: string;
  gap: number;
  memo: string;
  ridges?: RidgeData[];
};

export type RidgeData = {
  ridgeId: number;
  name: string;
  size: number;
  position: number;
  ridgeDetails?: RidgeDetailData[];
};

export type RidgeDetailData = {
  ridgeDetailId: number;
  cropName: string;
  position: number;
  ratio: number;
};
