import { latestNews } from "@/mocks/news";
import type { NewsEntry } from "@/types/news";

// API化したらここを書き換える
export const getNews = async (): Promise<NewsEntry> => {
  try {
    //   const res = await fetch("https://your-api-domain/api/news/latest", {
    //   cache: "no-store", // SSRで毎回最新取得したい場合
    // });
    return latestNews;
  } catch (error) {
    console.error("[getNews error]", error);
    throw error;
  }
};
