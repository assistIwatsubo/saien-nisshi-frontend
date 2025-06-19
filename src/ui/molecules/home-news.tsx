import Link from "next/link";
import type { NewsItem } from "@/types/news";

export const latestNews: NewsItem = {
  id: "123",
  date: "2025-06-08",
  title: "みどりぽのプロトタイピング開発を開始しました！",
};

export default function HomeNews() {
  const dateObj = new Date(latestNews.date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return (
    <aside aria-labelledby="news-area-title" className="py-4">
      <h3 className="app-text-shadow w-fit rounded-t-md bg-[var(--app-secondary-color)] px-2 text-sm leading-6 font-bold text-white shadow-md">
        みどりぽNEWS
      </h3>
      <Link
        key={latestNews.id}
        href={`/news/?id=${latestNews.id}`}
        className="flex flex-row items-stretch justify-start rounded-md rounded-tl-none bg-white p-2 text-sm shadow-md"
      >
        <time
          dateTime={latestNews.date}
          className="flex w-[20%] items-center justify-center border-r border-[var(--app-border-gray)] pr-2 whitespace-nowrap"
        >
          {month}月{day}日
        </time>
        <span className="pl-2">{latestNews.title}</span>
      </Link>
    </aside>
  );
}
