import { UserData } from "@/types/user-data";
// import { demoUsers } from "@/mocks/userData";

export const getUserData = async (userId: string): Promise<UserData | null> => {
  try {
    const res = await fetch(`http://localhost:8080/api/users/${userId}`, {
      cache: "no-store", // 最新データを毎回取得
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return null;
    }

    const user = await res.json();
    return user;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }

  // デモデータからログインユーザーを取得
  // const user = demoUsers.find((u) => u.id === userId) ?? null;
  // return user;
};
