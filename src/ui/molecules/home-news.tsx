"use client";

import { useEffect, useState } from "react";
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

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="container m-auto py-4 md:max-w-[80%]">
      <div className="m-auto flex flex-row items-stretch justify-start overflow-hidden rounded-md text-sm shadow-md md:max-w-[80vw]">
        <h3 className="app-text-shadow bg-[var(--app-secondary-color)] p-2 font-bold whitespace-nowrap text-white">
          みどりぽNEWS
        </h3>
        <Link
          key={latestNews.id}
          href={`/news/?id=${latestNews.id}`}
          className="block w-full bg-white p-2"
        >
          {latestNews.title}
          <time dateTime={latestNews.date}>
            ({month}月{day}日)
          </time>
        </Link>
      </div>
    </aside>
  );
}
