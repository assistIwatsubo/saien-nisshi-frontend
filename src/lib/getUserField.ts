import { getAccessToken } from "./getAccessToken";

export const getUserField = async () => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/user-fields/`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return null;
    }

    const userFields = await res.json();
    console.log(userFields);
    return userFields;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
