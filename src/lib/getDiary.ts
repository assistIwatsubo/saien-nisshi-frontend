import { DiaryEntry } from "@/types/diary";
import { getAccessToken } from "./getAccessToken";

export const getDiaryList = async (): Promise<DiaryEntry[] | undefined> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/diaries/`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return undefined;
    }

    const diaries = await res.json();
    return diaries.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return undefined;
  } finally {
  }
};

export const getDiaryById = async (id: string): Promise<DiaryEntry> => {
  const token = await getAccessToken();
  const res = await fetch(
    `http://localhost:8080/api/diaries/${id.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch schedule ${id}`);
  }

  const diary = await res.json();
  return diary.data;
};

export const getDiaryLatest = async (
  limit: number,
): Promise<DiaryEntry[] | undefined> => {
  const token = await getAccessToken();
  const res = await fetch(
    `http://localhost:8080/api/diaries?latest=${limit.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch schedule latest`);
  }

  const latestDiaries = await res.json();
  return latestDiaries.data;
};

export const getDiaryOfToday = async (): Promise<DiaryEntry | undefined> => {
  const token = await getAccessToken();
  const res = await fetch(`http://localhost:8080/api/diaries/today`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch getDiaryOfToday`);
  }

  const todayDiary = await res.json();

  return todayDiary.data;
};
