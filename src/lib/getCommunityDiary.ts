import { communityDiaryEntries } from "@/mocks/community-diary";
import type { CommunityDiaryEntry } from "@/types/community-diary";

// API化したらここを書き換えるだけでOK
export const getCommunityDiary = async (): Promise<CommunityDiaryEntry[]> => {
  //   const res = await fetch("https://your-api-domain/api/news/latest", {
  //   cache: "no-store", // SSRで毎回最新取得したい場合
  // });
  return communityDiaryEntries;
};
