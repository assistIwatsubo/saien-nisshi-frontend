import { getDateParts } from "@/lib/utils/format-date";
import CalendarViewWithScroll from "@/ui/molecules/calendar-view-with-scroll";
import type {
  CalendarMap,
  CalendarDiary,
  CalendarSchedule,
} from "@/types/calendar";
import { DiaryEntry } from "@/types/diary";
import { ScheduleEntry } from "@/types/schedule";

type Props = {
  diaryEntries: DiaryEntry[] | undefined;
  scheduleEntries: ScheduleEntry[] | undefined;
};

/** Map化ユーティリティ */
function createCalendarMap(
  diaryEntries: DiaryEntry[] | undefined,
  scheduleEntries: ScheduleEntry[] | undefined,
): CalendarMap {
  const map: CalendarMap = new Map();

  // diary をマップに登録
  if (diaryEntries) {
    for (const entry of diaryEntries) {
      const iso = getDateParts(new Date(entry.date)).iso;
      const diary: CalendarDiary = {
        id: entry.diaryId,
        detailTypes: entry.details?.map((d) => d.type) ?? [],
        date: entry.date,
      };

      // 1日1件前提なので diaries ではなく diary
      const prev = map.get(iso) ?? {};
      map.set(iso, { ...prev, diary });
    }
  }

  // schedule をマップに追加
  if (scheduleEntries) {
    for (const s of scheduleEntries) {
      const start = new Date(s.start);
      const end = s.end ? new Date(s.end) : start;

      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const iso = getDateParts(d).iso;
        const prev = map.get(iso) ?? {};
        const schedules = prev.schedules ?? [];

        const schedule: CalendarSchedule = {
          id: s.id,
          title: s.title,
          status: s.status,
          start: s.start,
          end: s.end,
        };

        schedules.push(schedule);
        map.set(iso, { ...prev, schedules });
      }
    }
  }

  return map;
}

export default function CalendarContainer({
  diaryEntries,
  scheduleEntries,
}: Props) {
  const calendarMap = createCalendarMap(diaryEntries, scheduleEntries);

  const startMonth = 4; // 4月スタート
  const currentYear = new Date().getFullYear();

  // 計算の都合により0ベースで月を保持（0=1月なので4月は3）
  const monthsToShow = Array.from({ length: 12 }, (_, i) => {
    const month = (startMonth - 1 + i) % 12; // 0〜11
    const year = currentYear + Math.floor((startMonth - 1 + i) / 12);
    return { year, month };
  });

  return (
    <CalendarViewWithScroll
      monthsToShow={monthsToShow}
      calendarMap={calendarMap}
    />
  );
}
