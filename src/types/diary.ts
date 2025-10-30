import { ScheduleEntry } from "./schedule";

export type DiaryEntry = {
  diaryId: number;
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
  "cropName",
  "fieldName",
  "pesticideName",
  "concentration",
  "dilutionRate",
  "appliedAmount",
  "memo",
] as const;
export type FieldLabelType = (typeof FIELD_LABEL_TYPES)[number];

export const fieldLabels: Record<FieldLabelType, string> = {
  cropName: "作物名",
  fieldName: "圃場名",
  pesticideName: "薬剤名",
  concentration: "濃度",
  dilutionRate: "希釈倍率",
  appliedAmount: "散布量",
  memo: "作業メモ",
};

// --- 各 detailType ごとの DiaryDetail 型 ---
export type CropDetail = {
  // いまのところつかってない
  cropName: string;
  fieldName: string;
};

export type PesticideDetail = {
  pesticideId: number;
  pesticideName: string;
  amount?: string;
  amountUnit?: string;
  concentration?: string;
  concentrationUnit?: string;
  dilurationRate?: string;
};

export type DiaryDetail = {
  detailId: number;
  position: number;
  type: DiaryDetailType;
  cropFieldId?: number;
  cropName?: string;
  fieldName?: string;
  crop?: CropDetail;
  pesticide?: PesticideDetail;
  memo?: string;
};
