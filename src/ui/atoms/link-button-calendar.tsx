"use client";

import { useRouter } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { useCalendar } from "@/contexts/calendar-context";
import { getDateParts } from "@/lib/utils/iso-date";

type Props = {
  year?: string;
  month?: string;
};

const { year: currentYear, month: currentMonth } = getDateParts(new Date());

export default function LinkButtonCalendar({
  year = currentYear,
  month = currentMonth,
}: Props) {
  const { setYear, setMonth } = useCalendar();
  const router = useRouter();

  const handleClick = () => {
    if (year) setYear(year);
    if (month) setMonth(month);
    router.push("/terrace/calendar");
  };

  return (
    <div className="fixed bottom-40 left-4 z-2">
      <button
        onClick={handleClick}
        className="app-blurred-bg-white flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-[var(--app-secondary-color-dark)] text-center text-xs font-bold text-[var(--app-primary-color)] shadow-lg"
      >
        <CalendarDays width={40} height={40} />
        カレンダー
        <br />
        を見る
      </button>
    </div>
  );
}
