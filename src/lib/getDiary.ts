import { DiaryEntry } from "@/types/diary";
import { getAccessToken } from "./getAccessToken";

export const getDiaryList = async (): Promise<DiaryEntry[]> => {
  console.log("fetchDiaryList started");
  console.time("getDiaryList");
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
      return [];
    }

    const diaries = await res.json();
    console.log(diaries);
    return diaries;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  } finally {
    console.timeEnd("getDiaryList");
  }
};

export const getDiaryById = async (id: string): Promise<DiaryEntry> => {
  const token = await getAccessToken();
  const res = await fetch(`http://localhost:8080/api/diaries/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch schedule ${id}`);
  }

  const schedule: DiaryEntry = await res.json();
  return schedule;
};

export const getDiaryByDate = async (date: string): Promise<DiaryEntry[]> => {
  const token = await getAccessToken();
  const res = await fetch(
    `http://localhost:8080/api/diaries?date=${encodeURIComponent(date)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch diaries");
  }
  const diaries: DiaryEntry[] = await res.json();

  return diaries;
};
