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

export type DiaryDetailType = "crop" | "pesticide" | "other";
export const DIARY_DETAIL_TYPES: DiaryDetailType[] = [
  "crop",
  "pesticide",
  "other",
];

export const typeLabels: Record<DiaryDetailType, string> = {
  crop: "作物",
  pesticide: "薬剤",
  other: "その他",
};

export type fieldLabelType =
  | "cropName"
  | "fieldName"
  | "pesticideName"
  | "concentration"
  | "dilutionRate";

export const fieldLabels: Record<fieldLabelType, string> = {
  cropName: "作物名",
  fieldName: "圃場名",
  pesticideName: "薬剤名",
  concentration: "濃度",
  dilutionRate: "希釈倍率",
};

// DiaryDetailの型定義
export type DiaryDetail = {
  id: string;
  type: DiaryDetailType;
  fields: Partial<Record<fieldLabelType, string>>;
  memo?: string;
};
