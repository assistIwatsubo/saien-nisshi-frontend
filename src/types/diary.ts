import { ScheduleEntry } from "./schedule";

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
  diary_details?: DiaryDetail[];
  schedules?: ScheduleEntry[];
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
  "memo",
] as const;
export type FieldLabelType = (typeof FIELD_LABEL_TYPES)[number];

export const fieldLabels: Record<FieldLabelType, string> = {
  crop_name: "作物名",
  field_name: "圃場名",
  pesticide_name: "薬剤名",
  concentration: "濃度",
  dilution_rate: "希釈倍率",
  applied_amount: "散布量",
  memo: "作業メモ",
};

// --- 各 detailType ごとの DiaryDetail 型 ---
export type CropDetail = {
  crop_name: string,
  field_name: string,
};

export type PesticideDetail = {
  crop_name?: string,
  field_name?: string,
  pesticide_name: string,
  amount?: string,
  amount_unit?: string,
  concentration?: string,
  concentration_unit?: string,
  dilution_rate?: string,
};

export type DiaryDetail = {
  id: number;
  position: number,
  type: DiaryDetailType,
  diary_detail_crop?: CropDetail,
  diary_detail_pesticide?: PesticideDetail,
  memo?: string,
  created_at: string,
  updated_at?: string,
};
