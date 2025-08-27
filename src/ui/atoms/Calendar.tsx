import Link from "next/link";
import { getDateParts } from "@/lib/utils/format-date";
import PieChart from "@/ui/atoms/pie-chart";
import { Square, SquareCheck } from "lucide-react";
import type { CalendarMap } from "@/types/calendar";
import { scheduleStatus } from "@/lib/utils/color-map";

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

  // 空白埋め
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} />);
  }

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);
    const { iso } = getDateParts(date);
    const dayData = calendarMap.get(iso);

    // diaries 情報
    const diaries = dayData?.diaries ?? [];
    const hasDiary = diaries.length > 0;
    const detailTypes = diaries.flatMap((d) => d.detailTypes);

    // schedules 情報
    const schedules = dayData?.schedules ?? [];
    const isTodayOrHasDiary = isToday(date) || hasDiary;

    const cellContent = (
      <div className="relative h-12 w-full flex-col items-center justify-center">
        {/* 今日をハイライト */}
        {isToday(date) && (
          <span className="absolute inset-0 z-0 rounded-sm bg-[var(--app-home-base-color)]/75" />
        )}

        {/* scheduleアイコン 左上に固定 */}
        {schedules.length > 0 && (
          <div className="absolute top-0 left-0 z-10 flex space-x-0.5 p-0.5">
            {schedules
              .filter((s) => s.status !== "none")
              .map((s) =>
                s.status === "done" ? (
                  <SquareCheck
                    key={s.id}
                    className={`h-3 w-3 ${scheduleStatus[s.status]}`}
                  />
                ) : (
                  <Square
                    key={s.id}
                    className={`h-3 w-3 ${scheduleStatus[s.status]}`}
                  />
                ),
              )}
          </div>
        )}

        {/* スケジュールを専用レイヤーに配置 */}
        {schedules.length > 0 && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap justify-start gap-[2px] px-1">
            {schedules.map((s) => (
              <span
                key={s.id}
                className="line-clamp-1 rounded-full bg-[var(--app-base-color)] px-1 text-[8px] leading-none opacity-75"
              >
                {s.title}
              </span>
            ))}
          </div>
        )}

        {/* 日付 + PieChart */}
        <span
          className={[
            "relative z-5 inline-flex h-full w-full items-center justify-center",
            isTodayOrHasDiary ? "app-text-outline-white font-bold" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {day}
          {hasDiary && (
            <div className="absolute inset-0 -z-1 flex items-center justify-center">
              {detailTypes && detailTypes.length > 0 ? (
                <PieChart types={detailTypes} />
              ) : (
                // detail がないときは白丸だけ
                <svg width={30} height={30} viewBox="-1 -1 2 2">
                  <circle cx={0} cy={0} r={1} fill="#ffffff" />
                </svg>
              )}
            </div>
          )}
        </span>
      </div>
    );

    // diaryがあるなら最初のidにリンク
    days.push(
      <div key={day} className="text-gray-800">
        {diaries.length > 0 || schedules.length > 0 ? (
          <Link href={`/terrace/diary/${iso}`} className="block">
            {cellContent}
          </Link>
        ) : (
          cellContent
        )}
      </div>,
    );
  }

  return (
    <div className="app-blurred-bg-white mx-auto w-full max-w-lg rounded-lg border-4 border-[var(--app-primary-color)] shadow-lg">
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
