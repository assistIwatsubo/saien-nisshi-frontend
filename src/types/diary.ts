export type DiaryEntry = {
  id: string;
  user: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  date: string; // ISO形式 yyyy-mm-dd
  title: string;
  summary: string;
  tags?: string[];

  details?: DiaryDetail[]; // ここに複数の詳細を入れる
};

export type DiaryDetailType = "作物" | "薬剤" | "その他";
export const DIARY_DETAIL_TYPES: DiaryDetailType[] = ["作物", "薬剤", "その他"];

export type DiaryDetail = {
  id: string;
  type: DiaryDetailType;
  fields: Record<string, string | number | undefined>;
  // 例: { 作物名: "ネギ", 圃場名: "北山", 濃度: "10%" } など
};
