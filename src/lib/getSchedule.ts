import { ScheduleEntry, ScheduleStatus } from "@/types/schedule";
import { ScheduleEntries } from "@/mocks/schedule";

// API化したらここを書き換える
export const getScheduleList = async (
  status?: ScheduleStatus,
): Promise<ScheduleEntry[]> => {
  // 実際はAPI呼び出しでクエリパラメータにstatusを含める想定
  const entries = !status
    ? ScheduleEntries
    : ScheduleEntries.filter((entry) => entry.status === status);

  // 日付の新しい順にソート（時刻付きISO文字列に対応）
  return entries.sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime(),
  );
};

export const getScheduleById = async (
  id: string,
): Promise<ScheduleEntry | undefined> => {
  return ScheduleEntries.find((s) => s.id === id);
};
