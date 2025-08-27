"use client";

import { useEffect } from "react";
import Calendar from "@/ui/atoms/calendar";
import { useCalendar } from "@/contexts/calendar-context";
import type { CalendarMap } from "@/types/calendar";

type Props = {
  monthsToShow: { year: number; month: number }[]; // monthは0ベース
  calendarMap: CalendarMap;
};

export default function CalendarViewWithScroll({
  monthsToShow,
  calendarMap,
}: Props) {
  const { year, month } = useCalendar();

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
        const displayMonth = month + 1; // 1〜12 表示用
        return (
          <div
            key={`${year}-${displayMonth}`}
            id={`calendar-${year}-${displayMonth}`}
          >
            <Calendar
              year={year}
              month={month}
              calendarMap={calendarMap} // diary + schedule を統合した map
            />
          </div>
        );
      })}
    </div>
  );
}
