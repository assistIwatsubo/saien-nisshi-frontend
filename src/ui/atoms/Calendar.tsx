import Link from "next/link";
import { getDateParts } from "@/lib/utils/iso-date";
import PieChart from "@/ui/atoms/pie-chart"; // 有効化
import type { CalendarMap } from "@/types/calendar";

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function isToday(target: Date): boolean {
  const today = getDateParts();
  const check = getDateParts(target);
  return today.iso === check.iso;
}

type CalendarProps = {
  year: number;
  month: number; // 0-indexed
  calendarMap?: CalendarMap;
};

export default function Calendar({
  year,
  month,
  calendarMap = new Map(),
}: CalendarProps) {
  const days = [];
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const totalDays = getDaysInMonth(year, month);

  // 空白セル追加（1日目の曜日まで）
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} />);
  }

  // 各日付セル作成
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);
    const { iso } = getDateParts(date);
    const diary = calendarMap.get(iso);

    const isTodayOrHasDiary = isToday(date) || diary;
    const showPieChart = diary && diary.detailTypes.length >= 0;

    const cellContent = (
      <div className="relative flex h-8 w-full flex-col items-center justify-center text-sm">
        {/* ボーダー（今日だけ） */}
        {isToday(date) && (
          <span className="absolute inset-0 z-0 rounded-sm bg-[var(--app-home-base-color)]/75" />
        )}

        {/* テキストと PieChart をまとめる */}
        <span
          className={[
            "relative z-10 inline-flex h-full w-full items-center justify-center",
            isTodayOrHasDiary ? "app-text-outline-white font-bold" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {day}

          {/* PieChart を文字の背後、ボーダーの前に配置 */}
          {showPieChart && (
            <div className="absolute inset-0 -z-1 flex items-center justify-center">
              <PieChart types={diary.detailTypes} />
            </div>
          )}
        </span>
      </div>
    );

    days.push(
      <div key={day} className="text-gray-800">
        {diary ? (
          <Link href={`/terrace/diary/${diary.id}`} className="block">
            {cellContent}
          </Link>
        ) : (
          cellContent
        )}
      </div>,
    );
  }

  return (
    <div
      id={`month-${year}-${String(month + 1).padStart(2, "0")}`}
      className="app-blurred-bg-white mx-auto w-full max-w-md rounded-lg border-4 border-[var(--app-primary-color)] shadow-lg"
    >
      <div className="bg-[var(--app-primary-color)] p-2 text-center text-xl font-bold text-white">
        {year}年 {month + 1}月
      </div>

      <div className="grid grid-cols-7 border-t-1 border-dashed border-white/25 bg-[var(--app-primary-color)] p-2 text-center text-sm font-bold text-white">
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2 py-2 text-center">{days}</div>
    </div>
  );
}
