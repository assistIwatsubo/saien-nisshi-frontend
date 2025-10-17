import { getDateParts } from "@/lib/utils/format-date";
import PageTitle from "@/ui/molecules/page-title";
import { PencilLine } from "lucide-react";
import HatakeArea from "@/ui/templates/hatake-area";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryList } from "@/lib/getDiary";
import CalendarViewWithScroll from "@/ui/molecules/calendar-view-with-scroll";
import { getScheduleList } from "@/lib/getSchedule";
import type {
  CalendarMap,
  CalendarDiary,
  CalendarSchedule,
} from "@/types/calendar";

/** Map化ユーティリティ */
function createCalendarMap(
  diaryEntries: Awaited<ReturnType<typeof getDiaryList>> | null,
  scheduleEntries: Awaited<ReturnType<typeof getScheduleList>> | null,
): CalendarMap {
  const map: CalendarMap = new Map();

  // diary をマップに登録
  if (diaryEntries) {
    for (const entry of diaryEntries) {
      const iso = getDateParts(new Date(entry.date)).iso;
      const diary: CalendarDiary = {
        id: entry.id,
        detailTypes: entry.details?.map((d) => d.type) ?? [],
        date: entry.date,
      };

      const prev = map.get(iso) ?? {};
      const diaries = prev.diaries ?? [];
      diaries.push(diary);

      map.set(iso, { ...prev, diaries });
    }
  }

  // schedule をマップに追加
  if (scheduleEntries) {
    for (const s of scheduleEntries) {
      // スケジュールの開始日から終了日までを日単位でマップに登録
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

export default async function Page() {
  const diaryEntries = await fetchSafe(getDiaryList);
  const scheduleEntries = await fetchSafe(getScheduleList);
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
    <>
      <PageTitle title="カレンダー" icon={<PencilLine size={32} />} />
      <HatakeArea>
        <CalendarViewWithScroll
          monthsToShow={monthsToShow} // 0ベースのまま渡す
          calendarMap={calendarMap}
        />
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
        <LinkButtonWithIcon variant="archive" type="diary" />
      </BottomNav>
    </>
  );
}
