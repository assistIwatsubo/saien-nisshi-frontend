import ErrorMessage from "../atoms/error-message";
import { ScheduleEntry } from "@/types/schedule";
import ScheduleDisplay from "../atoms/schedule-display";
import { getScheduleTimePhase } from "@/lib/getScheduleTimePhase";
import Link from "next/link";
import { Plus } from "lucide-react";

type ScheduleProps = {
  schedules: ScheduleEntry[] | null;
};

export default function ScheduleBoard({ schedules }: ScheduleProps) {
  const visibleItems = schedules?.filter(
    (item) => getScheduleTimePhase(item) !== "after",
  );

  return (
    <section className="flex flex-1 flex-col overflow-hidden rounded-md bg-white shadow-md">
      <h3 className="block w-full bg-gray-100 py-1 text-center text-xs font-bold text-[var(--app-accent-color)]">
        直近の予定
      </h3>
      <nav className="flex items-center justify-between">
        <ul className="flex min-h-24 flex-wrap items-stretch text-sm">
          {visibleItems ? (
            visibleItems?.length > 0 &&
            visibleItems.slice(0, 3).map((item) => (
              <li key={item.id} className="max-w-1/4 p-2">
                <ScheduleDisplay entry={item} variant="simple" />
              </li>
            ))
          ) : (
            <ErrorMessage message="予定の取得に失敗しました" />
          )}
        </ul>
      </nav>
      <div className="h-full p-2">
        <Link
          className="flex gap-2 items-center justify-center rounded-sm border-2 border-dashed border-gray-400 p-0.5 text-center text-xs font-bold text-gray-500"
          href="/terrace/diary/schedule/create"
        >
          <Plus width={16} />
          予定を追加する
        </Link>
      </div>
    </section>
  );
}
