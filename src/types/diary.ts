import { ScheduleEntry } from "./schedule";

export type DiaryEntry = {
  diary_id: string;
  date: string; // ISO形式 yyyy-mm-dd
  title: string | null;
  summary: string | null;
  details?: DiaryDetail[];
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
  // いまのところつかってない
  crop_name: string,
  field_name: string,
};

export type PesticideDetail = {
  pesticide_id: number,
  pesticide_name: string,
  amount?: string,
  amount_unit?: string,
  concentration?: string,
  concentration_unit?: string,
  diluration_rate?: string,
};

export type DiaryDetail = {
  detail_id: number;
  position: number,
  type: DiaryDetailType,
  crop_field_id?: number,
  crop_name?: string,
  field_name?: string,
  crop?: CropDetail,
  pesticide?: PesticideDetail,
  memo?: string,
};
