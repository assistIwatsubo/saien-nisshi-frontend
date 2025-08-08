import { DiaryDetailType } from "./diary";

export type CalendarEntry = {
  id: string;
  date: string; // ISO形式
  detailTypes: DiaryDetailType[];
};

export type CalendarMap = Map<
  string,
  { id: string; detailTypes: DiaryDetailType[] }
>;
