import Link from "next/link";
import { Pointer } from "lucide-react";
import { Schedule } from "@/types/skedule";

export const dummySchedules: Schedule[] = [
  {
    id: "123",
    title: "エダマメ定植",
    start: "2025-06-17",
    end: "2025-06-18",
    status: "pending",
  },
  {
    id: "124",
    title: "ミズナ収穫",
    start: "2025-06-19",
    end: "",
    status: "pending", // ← 表示されない
  },
];

export default function HomeSchedules() {
  const visibleItems = dummySchedules.filter((item) => item.status !== "done");

  return (
    <section aria-labelledby="schedule-area-title" className="py-4">
      <h3 className="app-text-shadow w-fit rounded-t-md bg-[var(--app-secondary-color)] px-2 text-sm leading-6 font-bold text-white shadow-md">
        今日の予定
      </h3>

      <ul className="app-blurred-bg-white flex flex-col gap-4 rounded-md rounded-tl-none p-4 text-sm shadow-md">
        {visibleItems.map((item, index) => (
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
        ))}
      </ul>
    </section>
  );
}
