import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function LinkButtonCalendar() {
  return (
    <div className="fixed bottom-40 left-4 z-2">
      <Link
        href="/terrace/calendar"
        className="app-blurred-bg-white flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-[var(--app-secondary-color-dark)] text-center text-xs font-bold text-[var(--app-primary-color)] shadow-lg"
      >
        <CalendarDays width={40} height={40} />
        カレンダー
        <br />
        を見る
      </Link>
    </div>
  );
}
