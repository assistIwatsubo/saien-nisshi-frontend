import { getISODate } from "@/lib/utils/format-date";
import { DiaryEntry } from "@/types/diary";
import { getDiaryOfToday } from "../getDiary";
import { fetchSafe } from "./fetchSate";

const today = getISODate(new Date());

export type DiaryInfo = {
  hasDiary: boolean;
  date: string;
};

export const diaryInfo = async (date: string = today): Promise<DiaryInfo> => {
  const diary: DiaryEntry | undefined = await fetchSafe(getDiaryOfToday);

  const hasDiary = !!diary;

  return {
    hasDiary,
    date,
  };
};
