import { getISODate } from "@/lib/utils/format-date";
import { DiaryEntry } from "@/types/diary";
import { getDiaryLatest } from "../getDiary";

const today = getISODate(new Date());

export type DiaryInfo = {
  hasDiary: boolean;
  date: string;
};

export const diaryInfo = async (date: string = today): Promise<DiaryInfo> => {
  const diaries: DiaryEntry[] | null = await getDiaryLatest(1); 
  const hasDiary = (diaries?.length ?? 0) > 0; 

  return {
    hasDiary,
    date,
  };
};
