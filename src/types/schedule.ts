export type ScheduleStatus = "unused" | "undone" | "done";

export interface ScheduleEntry {
  id: string;
  userId: string;
  title: string;
  start: string;
  end?: string;
  status: ScheduleStatus;
  created_at: string;
  updated_at?: string;
  memo?: string;
}

export type ScheduleTimePhase = "before" | "during" | "after";

export const SCHEDULE_TIME_PHASES: ScheduleTimePhase[] = [
  "before",
  "during",
  "after",
];

export const timePhaseLabelMap: Record<ScheduleTimePhase, string> = {
  before: "期間前",
  during: "期間中",
  after: "期間後",
};
