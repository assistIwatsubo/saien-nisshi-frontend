import { MeData, UserData } from "@/types/user-data";
import { getAccessToken } from "./getAccessToken";
import { FollowingDiaryEntry } from "@/types/community-diary";

export const getUserData = async (): Promise<MeData | undefined> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/me`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return undefined;
    }

    const user = await res.json();
    return user.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return undefined;
  }
};

export const getFollowings = async (): Promise<UserData[] | undefined> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/users/followings`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return undefined;
    }

    const followings = await res.json();
    return followings.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return undefined;
  }
};

export const getFollowingsWithDiaries = async (
  limit?: number,
): Promise<FollowingDiaryEntry[] | undefined> => {
  try {
    const token = await getAccessToken();
    const params = new URLSearchParams();
    if (limit !== undefined) params.set("limit", limit.toString());

    const url = `http://localhost:8080/api/users/followings/latest-diaries?${params.toString()}`;

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return undefined;
    }
    const followings = await res.json();
    return followings;
  } catch (error) {
    console.error("Fetch error:", error);
    return undefined;
  }
};
