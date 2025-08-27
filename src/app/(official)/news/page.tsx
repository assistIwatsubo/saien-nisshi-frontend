import { fetchSafe } from "@/lib/utils/fetchSate";
import { getNewsList } from "@/lib/getNews";
import { Megaphone } from "lucide-react";
import { getFormattedDate } from "@/lib/utils/format-date";
import Link from "next/link";

export default async function Page() {
  const newsEntries = await fetchSafe(getNewsList);
  console.log(newsEntries);

  if (!newsEntries || newsEntries.length < 0) {
    return (
      <div className="py-8 text-center text-red-500">
        ニュース一覧の取得に失敗しました。
      </div>
    );
  }

  return (
    <>
      <div data-layout="official-title">
        <h2 className="relative m-auto flex items-center justify-center gap-2 px-4 py-8 text-3xl font-bold before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-12 before:-translate-x-1/2 before:rounded-full before:bg-[var(--app-primary-color)]">
          <Megaphone size={40} className="mt-0.5" />
          お知らせ一覧
        </h2>
      </div>
      <div
        data-layout="official-body"
        className="m-auto px-4 py-8 md:max-w-[80vw]"
      >
        <ol className="flex flex-col gap-8 my-4">
          {newsEntries.map((entry) => (
            <li              key={entry.id}            >
              <Link href={`/news/${entry.id}`}
               className="block rounded-md border-1 border-[var(--app-secondary-color)] bg-white/75 p-4 shadow-md">
                <h3 className="font-bold text-xl">{entry.title}</h3>
                <p className="py-2 text-sm text-gray-500">
                  {getFormattedDate(new Date(entry.date), {
                    includeYear: true,
                  })}
                </p>
                <p className="line-clamp-2 pt-2">{entry.body}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
