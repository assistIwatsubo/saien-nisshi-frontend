export type ScheduleStatus = "undone" | "done" | "none";

export interface ScheduleEntry {
  id: string;
  title: string;
  /** ISO8601形式（YYYY-MM-DD or YYYY-MM-DDTHH:mm） */
  start: string;
  /** ISO8601形式。指定がなければ start から自動計算 */
  end?: string;
  status: ScheduleStatus;
  /** ISO8601形式の作成日時 */
  created_at?: string;
  /** ISO8601形式の更新日時 */
  updated_at?: string;
  /** 任意のメモテキスト */
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
