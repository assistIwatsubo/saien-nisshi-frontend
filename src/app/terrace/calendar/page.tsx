// app/diary/page.tsx
import Calendar from "@/ui/atoms/Calendar";
import { getDateParts } from "@/lib/utils/iso-date";
import type { DiaryDetailType } from "@/types/diary";
import PageTitle from "@/ui/molecules/page-title";
import { PencilLine } from "lucide-react";
import HatakeArea from "@/ui/templates/hatake-area";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiary } from "@/lib/getDiary";

type CalendarMap = Map<
  string,
  {
    id: string;
    detailTypes: DiaryDetailType[];
  }
>;

/** Map化ユーティリティ */
function createCalendarMap(
  entries: Awaited<ReturnType<typeof getDiary>> | null,
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
  const diaryEntries = await fetchSafe(getDiary);
  const calendarMap = createCalendarMap(diaryEntries);

  const startMonth = 4;
  const currentYear = new Date().getFullYear();

  const monthsToShow = Array.from({ length: 12 }, (_, i) => {
    const month = (startMonth - 1 + i) % 12;
    const year = currentYear + Math.floor((startMonth - 1 + i) / 12);
    return { year, month };
  });

  return (
    <>
      <PageTitle title="カレンダー" icon={<PencilLine size={32} />} />
      <HatakeArea>
        <div className="flex flex-col gap-12 pb-8">
          {monthsToShow.map(({ year, month }) => (
            <Calendar
              key={`${year}-${month}`}
              year={year}
              month={month}
              calendarMap={calendarMap}
            />
          ))}
        </div>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="diary" />
      </BottomNav>
    </>
  );
}
