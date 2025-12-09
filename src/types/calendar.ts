import { DiaryDetailType } from "./diary";
import type { ScheduleStatus } from "./schedule";

export type CalendarDiary = {
  id: number;
  date: string;
  detailTypes: DiaryDetailType[];
};

export type CalendarSchedule = {
  id: string;
  title: string; // title が必要だったので追加
  status: ScheduleStatus;
  start: string;
  end?: string;
};

export type CalendarEntry = {
  diary?: CalendarDiary;
  schedules?: CalendarSchedule[];
};

export type CalendarMap = Map<string, CalendarEntry>;
