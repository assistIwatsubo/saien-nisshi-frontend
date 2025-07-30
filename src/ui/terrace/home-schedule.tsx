import Link from "next/link";
import TitleH3 from "../atoms/title-h3";
import ErrorMessage from "../atoms/error-message";
import { ScheduleEntry } from "@/types/schedule";
import { getFormattedDate } from "@/lib/utils/format-date";

type ScheduleProps = {
  schedules: ScheduleEntry[] | null;
};

export default function HomeSchedules({ schedules }: ScheduleProps) {
  const visibleItems = schedules?.filter((item) => item.status !== "done");

  return (
    <section className="overflow-hidden rounded-md bg-white shadow-md">
      <h3 className="block w-full bg-gray-100 py-1 text-center text-xs font-bold text-[var(--app-accent-color)]">
        今日の予定
      </h3>
      <ul className="flex gap-4 p-2 text-sm">
        {visibleItems ? (
          visibleItems?.length > 0 &&
          visibleItems.map((item) => (
            <li key={item.id} className="w-fit border-t-4 border-amber-100">
              <Link
                href={`/schedules/edit?id=${item.id}`}
                className="block h-full bg-[var(--app-base-color)] p-2 text-center shadow-md"
              >
                <p className="block leading-loose">
                  {item.title}
                  <span className="mt-1 block text-xs font-normal text-gray-500">
                    <time dateTime={item.start}>
                      {getFormattedDate(new Date(item.start))}
                    </time>
                    {item.end && (
                      <>
                        <br />～{" "}
                        <time dateTime={item.end}>
                          {getFormattedDate(new Date(item.end))}
                        </time>
                      </>
                    )}
                  </span>
                </p>
              </Link>
            </li>
          ))
        ) : (
          <ErrorMessage message="予定の取得に失敗しました" />
        )}
      </ul>
    </section>
  );
}
