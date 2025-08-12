"use client";

import { useEffect } from "react";
import Calendar from "@/ui/atoms/Calendar";
import { useCalendar } from "@/contexts/calendar-context";
import type { DiaryDetailType } from "@/types/diary";

type Props = {
  monthsToShow: { year: number; month: number }[]; // monthは0ベースのまま
  calendarMap: Map<string, { id: string; detailTypes: DiaryDetailType[] }>;
};

export default function CalendarViewWithScroll({
  monthsToShow,
  calendarMap,
}: Props) {
  const { year, month } = useCalendar();
  console.log("calendarcontext:", year, month);

  useEffect(() => {
    if (!year || month === undefined) return;

    const id = `calendar-${year}-${Number(month)}`;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [year, month]);

  return (
    <div className="flex flex-col gap-12 pb-8">
      {monthsToShow.map(({ year, month }) => {
        const displayMonth = month + 1; // 1〜12 表示用に変換
        return (
          <div
            key={`${year}-${displayMonth}`}
            id={`calendar-${year}-${displayMonth}`}
          >
            <Calendar year={year} month={month} calendarMap={calendarMap} />
          </div>
        );
      })}
    </div>
  );
}
