import { diaryEntries } from "@/mocks/diary";
import type { DiaryEntry } from "@/types/diary";

export const getDiaryList = async (date?: string): Promise<DiaryEntry[]> => {
  // DBからデータを取得する場合は、username（一意なら）やdate、diaryId等を組み合わせて問い合わせるはずなので、これを活用するためfilterを残す
  return date ? diaryEntries.filter((d) => d.date === date) : diaryEntries;
};

export const getDiaryById = async (
  id: string,
): Promise<DiaryEntry | undefined> => {
  return diaryEntries.find((d) => d.id === id);
};

export const getDiaryByDate = async (
  date: string,
): Promise<DiaryEntry | undefined> => {
  return diaryEntries.find((d) => d.date === date);
};
