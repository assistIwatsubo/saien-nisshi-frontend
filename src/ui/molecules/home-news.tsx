import Link from "next/link";
import { NewsEntry } from "@/types/news";
import { getFormattedDate } from "@/lib/utils/format-date";
import ErrorMessage from "../atoms/error-message";

const contentClass = "block w-full bg-white p-2";

type NewsProps = {
  latestNews: NewsEntry | null;
};

export default function HomeNews({ latestNews }: NewsProps) {
  return (
    <aside className="container m-auto py-4 md:max-w-[80%]">
      <div className="m-auto flex flex-row items-stretch justify-start overflow-hidden rounded-md text-sm shadow-md md:max-w-[80vw]">
        <h3 className="app-text-shadow inline-flex items-center bg-[var(--app-secondary-color)] p-2 font-bold whitespace-nowrap text-white">
          お知らせ
        </h3>
        {!latestNews ? (
          <ErrorMessage
            message="ニュース情報の取得に失敗しました。"
            className={contentClass}
          />
        ) : (
          <Link href={`/news/?id=${latestNews.id}`} className={contentClass}>
            {latestNews.title}
            <time dateTime={latestNews.date}>
              ({getFormattedDate(new Date(latestNews.date))})
            </time>
          </Link>
        )}
      </div>
    </aside>
  );
}
