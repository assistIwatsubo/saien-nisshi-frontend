import { newsEntries } from "@/mocks/news";
import type { NewsEntry } from "@/types/news";

// API化したらここを書き換える
export const getNewsList = async (): Promise<NewsEntry[]> => {
  if (!newsEntries || newsEntries.length === 0) {
    return [
      {
        id: "0",
        date: new Date().toISOString().slice(0, 10),
        title: "ニュースはありません",
        categories: [],
        body: "",
      },
    ];
  }

  return newsEntries;
};

export const getNewsLatest = async (): Promise<NewsEntry> => {
  try {
    // 日付の降順に並べ替えて一番新しいものを返す
    const sorted = [...newsEntries].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    return sorted[0];
  } catch (error) {
    console.error("[getNewsLatest error]", error);
    throw error;
  }
};

export const getNewsById = async (
  id: string,
): Promise<NewsEntry | undefined> => {
  try {
    // ID に一致するニュースを探す
    return newsEntries.find((entry) => entry.id === id);
  } catch (error) {
    console.error("[getNewsById error]", error);
    return undefined;
  }
};
