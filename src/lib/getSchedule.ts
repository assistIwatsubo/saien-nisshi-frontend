import { ScheduleEntry } from "@/types/schedule";
import { ScheduleEntries } from "@/mocks/schedule";

// API化したらここを書き換える
export const getSchedule = async (): Promise<ScheduleEntry[]> => {
  //   const res = await fetch("https://your-api-domain/api/news/latest", {
  //   cache: "no-store", // SSRで毎回最新取得したい場合
  // });
  return ScheduleEntries;
};
