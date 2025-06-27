import Link from "next/link";
import { Pointer } from "lucide-react";
import TitleH3 from "../atoms/title-h3";
import ErrorMessage from "../atoms/error-message";
import { getSchedule } from "@/lib/getSchedule";

export default async function HomeSchedules() {
  let content: React.ReactNode;

  try {
    const scheduleEntries = await getSchedule();
    const visibleItems = scheduleEntries.filter(
      (item) => item.status !== "done",
    );

    if (visibleItems.length === 0) return null;

    content = visibleItems.map((item, index) => (
      <li key={item.id} className="w-full">
        <Link
          href={`/schedules/edit?id=${item.id}`}
          className="flex w-full flex-row items-stretch justify-start shadow-md"
        >
          <span className="flex w-1/7 items-center justify-center bg-[var(--app-primary-color)] text-xl font-bold text-[var(--app-secondary-color)]">
            {visibleItems.length > 1 && index + 1}
          </span>
          <div className="flex flex-1 flex-row items-stretch justify-between bg-[var(--app-base-color)]">
            <p className="block px-4 py-2 leading-loose">
              {item.title}
              <span className="block text-xs font-normal text-gray-500">
                <time dateTime={item.start}>
                  {new Date(item.start).toLocaleDateString("ja-JP", {
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                {item.end && (
                  <>
                    ～{" "}
                    <time dateTime={item.end}>
                      {new Date(item.end).toLocaleDateString("ja-JP", {
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </>
                )}
              </span>
            </p>
            <span className="inline-flex items-center p-4">
              <Pointer color="#cccccc" />
            </span>
          </div>
        </Link>
      </li>
    ));
  } catch (error) {
    content = (
      <li>
        <ErrorMessage message="予定の取得に失敗しました。" />
      </li>
    );
  }

  return (
    <section aria-labelledby="schedule-area-title" className="py-4">
      <TitleH3
        label="今日の予定"
        type="likeTab"
        color="accent"
        id="schedule-area-title"
      />
      <ul className="app-blurred-bg-white flex flex-col gap-4 rounded-md rounded-tl-none p-4 text-sm shadow-md">
        {content}
      </ul>
    </section>
  );
}
