export type DiaryEntry = {
  id: string;
  user: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  date: string; // ISO形式 yyyy-mm-dd
  title: string | null;
  summary: string | null;
  details?: DiaryDetail[];
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

export const FIELD_LABEL_TYPES = [
  "crop_name",
  "field_name",
  "pesticide_name",
  "concentration",
  "dilution_rate",
  "applied_amount",
] as const;
export type FieldLabelType = (typeof FIELD_LABEL_TYPES)[number];

export const fieldLabels: Record<FieldLabelType, string> = {
  crop_name: "作物名",
  field_name: "圃場名",
  pesticide_name: "薬剤名",
  concentration: "濃度",
  dilution_rate: "希釈倍率",
  applied_amount: "散布量",
};

// --- 各 detailType ごとの DiaryDetail 型 ---
export type CropDetail = {
  id: string;
  diary_id: string;
  type: "crop";
  crop_name: string[];
  field_name: string[];
  memo?: string;
};

export type PesticideDetail = {
  id: string;
  diary_id: string;
  type: "pesticide";
  crop_name: string;
  field_name: string[];
  pesticide_name: string;
  concentration?: string; // 原液濃度
  concentration_unit?: string; // % とか割
  dilution_rate?: string; // 希釈率
  applied_amount?: string; // 実際に散布した量
  amount_unit?: string; // L, ml, g, kg
  memo?: string;
};

export type OtherDetail = {
  id: string;
  diary_id: string;
  type: "other";
  memo?: string;
};

// --- Union ---
export type DiaryDetail = CropDetail | PesticideDetail | OtherDetail;
