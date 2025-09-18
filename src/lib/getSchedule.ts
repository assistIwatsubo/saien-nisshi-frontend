import { ScheduleEntry } from "@/types/schedule";
import { getAccessToken } from "./getAccessToken";

export const getScheduleList = async (): Promise<ScheduleEntry[]> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/schedules/`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return [];
    }

    const schedules = await res.json();
    // console.log(schedules);
    return schedules;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

export const getScheduleById = async (id: string): Promise<ScheduleEntry> => {
  const token = await getAccessToken();
  const res = await fetch(`http://localhost:8080/api/schedules/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch schedule ${id}`);
  }

  const schedule: ScheduleEntry = await res.json();
  return schedule;
};

export const getScheduleByDate = async (
  date: string,
): Promise<ScheduleEntry[]> => {
  const token = await getAccessToken();
  const res = await fetch(
    `http://localhost:8080/api/schedules?date=${encodeURIComponent(date)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch schedules");
  }

  const schedules: ScheduleEntry[] = await res.json();

  return schedules;
};
