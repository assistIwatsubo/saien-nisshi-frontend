import { getDateParts } from "@/lib/utils/iso-date";
import type { DiaryDetailType } from "@/types/diary";
import PageTitle from "@/ui/molecules/page-title";
import { PencilLine } from "lucide-react";
import HatakeArea from "@/ui/templates/hatake-area";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryList } from "@/lib/getDiary";
import CalendarViewWithScroll from "@/ui/molecules/calendar-view-with-scroll";

type CalendarMap = Map<
  string,
  {
    id: string;
    detailTypes: DiaryDetailType[];
  }
>;

/** Map化ユーティリティ */
function createCalendarMap(
  entries: Awaited<ReturnType<typeof getDiaryList>> | null,
): CalendarMap {
  const map: CalendarMap = new Map();
  if (entries) {
    for (const entry of entries) {
      const iso = getDateParts(new Date(entry.date)).iso;
      const detailTypes = entry.details?.map((d) => d.type) ?? [];
      map.set(iso, { id: entry.id, detailTypes });
    }
  }
  return map;
}

export default async function Page() {
  const diaryEntries = await fetchSafe(getDiaryList);
  const calendarMap = createCalendarMap(diaryEntries);

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
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="diary" />
      </BottomNav>
    </>
  );
}
