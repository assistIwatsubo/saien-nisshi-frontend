import { ScheduleEntry, ScheduleTimePhase } from "@/types/schedule";

/**
 * 指定した ScheduleEntry のタイムフェーズを返す
 * - start より前: "before"
 * - start 以上 end 以下: "during"
 * - end より後: "after"
 * done/未完了はここでは扱わず、status として別に管理
 */
export function getScheduleTimePhase(
  entry: ScheduleEntry,
  now: Date = new Date(),
): ScheduleTimePhase {
  const start = new Date(entry.start);
  const end = entry.end ? new Date(entry.end) : start;

  if (now < start) return "before";
  if (now >= start && now <= end) return "during";
  return "after";
}
