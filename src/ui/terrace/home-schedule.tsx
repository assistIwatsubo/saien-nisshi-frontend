import ErrorMessage from "../atoms/error-message";
import { ScheduleEntry } from "@/types/schedule";
import ScheduleDisplay from "../atoms/schedule-display";
import { getScheduleTimePhase } from "@/lib/getScheduleTimePhase";

type ScheduleProps = {
  schedules: ScheduleEntry[] | null;
};

export default function HomeSchedules({ schedules }: ScheduleProps) {
  const visibleItems = schedules?.filter(
    (item) => item.status !== "done" && getScheduleTimePhase(item) !== "after",
  );

  return (
    <section className="flex-grow overflow-hidden rounded-md bg-white shadow-md">
      <h3 className="block w-full bg-gray-100 py-1 text-center text-xs font-bold text-[var(--app-accent-color)]">
        今日の予定
      </h3>
      <ul className="flex flex-wrap items-stretch gap-4 p-2 text-sm">
        {visibleItems ? (
          visibleItems?.length > 0 &&
          visibleItems.slice(0, 3).map((item) => (
            <li key={item.id} className="w-fit">
              <ScheduleDisplay entry={item} variant="simple" />
            </li>
          ))
        ) : (
          <ErrorMessage message="予定の取得に失敗しました" />
        )}
      </ul>
    </section>
  );
}
