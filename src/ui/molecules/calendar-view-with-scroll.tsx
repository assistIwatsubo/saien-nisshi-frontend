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
    <ol className="flex h-full snap-x snap-mandatory gap-4 overflow-x-auto">
      {monthsToShow.map(({ year, month }) => {
        const displayMonth = month + 1; // 1〜12 表示用
        return (
          <li
            key={`${year}-${displayMonth}`}
            id={`calendar-${year}-${displayMonth}`}
            className="w-full flex-shrink-0 snap-start p-8 lg:px-12"
          >
            <Calendar
              year={year}
              month={month}
              calendarMap={calendarMap} // diary + schedule を統合した map
            />
          </li>
        );
      })}
    </ol>
  );
}
