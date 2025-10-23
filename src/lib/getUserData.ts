import { MeData, UserData } from "@/types/user-data";
import { getAccessToken } from "./getAccessToken";

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
