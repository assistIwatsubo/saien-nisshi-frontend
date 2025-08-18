// color-map.ts
import type { DiaryDetailType } from "@/types/diary";
import type { ScheduleTimePhase, ScheduleStatus } from "@/types/schedule";

type DiaryTypeStyle = {
  border: string;
  bg: string;
  text?: string; // <- オプショナルにした
};

export const diaryTypeColorMap: Record<DiaryDetailType, DiaryTypeStyle> = {
  crop: {
    border: "border-green-400",
    bg: "bg-green-400",
    text: "text-green-500",
  },
  pesticide: {
    border: "border-blue-400",
    bg: "bg-blue-400",
    text: "text-blue-500",
  },
  other: {
    border: "border-gray-400",
    bg: "bg-gray-400",
    text: "text-gray-500",
  },
};

export const scheduleTimePhaseColorMap: Record<ScheduleTimePhase, string> = {
  before: "text-yellow-500",
  during: "text-red-400",
  after: "border-transparent",
};

export const scheduleStatus: Record<ScheduleStatus, string> = {
  undone: "text-green-600",
  done: "text-red-600",
  none: "",
};
