import Link from "next/link";

export default function HomeNews() {
  // 本当はここにfetchの処理をかく

  return (
    <aside aria-labelledby="news-area-title container" className="py-4">
      <h3 className="text-shadow w-fit rounded-t-md bg-[var(--app-secondary-color)] px-2 text-sm leading-6 font-bold text-white shadow-md">
        みどりぽNEWS
      </h3>
      <Link
        href="/news/?id=123"
        className="flex flex-row items-stretch justify-start rounded-md rounded-tl-none bg-white p-2 text-sm shadow-md"
      >
        <time
          dateTime="2025-06-08"
          className="flex w-[20%] items-center justify-center border-r border-[var(--app-border-gray)] pr-2"
        >
          6月8日
        </time>
        <span className="pl-2">
          みどりぽのプロトタイピング開発を開始しました！
        </span>
      </Link>
    </aside>
  );
}
