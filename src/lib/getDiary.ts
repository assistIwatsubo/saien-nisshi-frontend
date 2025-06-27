import { diaryEntries } from "@/mocks/diary";
import type { DiaryEntry } from "@/types/diary";

// API化したらここを書き換える
export const getDiary = async (): Promise<DiaryEntry[]> => {
  //   const res = await fetch("https://your-api-domain/api/news/latest", {
  //   cache: "no-store", // SSRで毎回最新取得したい場合
  // });
  return diaryEntries;
};
