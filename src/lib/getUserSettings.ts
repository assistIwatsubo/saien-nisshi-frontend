// lib/fetchUserSettings.ts
export async function fetchUserSettings(
  userId: string,
): Promise<Record<string, string>> {
  const res = await fetch(
    `http://localhost:8000/api/users/${userId}/settings`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    console.error("設定取得失敗");
    return {};
  }

  return await res.json();
}
