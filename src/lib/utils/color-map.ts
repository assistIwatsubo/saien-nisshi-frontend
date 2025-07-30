import { DIARY_DETAIL_TYPES, type DiaryDetailType } from "@/types/diary";

// 各種 DiaryDetailType に対応するクラス
const colorConfigs: { border: string; bg: string }[] = [
  { border: "border-green-400", bg: "bg-green-400" },
  { border: "border-blue-400", bg: "bg-blue-400" },
  { border: "border-gray-400", bg: "bg-gray-400" },
];

// Record<DiaryDetailType, { border: string; bg: string }>
export const diaryTypeColorMap: Record<
  DiaryDetailType,
  { border: string; bg: string }
> = Object.fromEntries(
  DIARY_DETAIL_TYPES.map((type, index) => [
    type,
    colorConfigs[index] ?? { border: "border-gray-400", bg: "bg-gray-400" },
  ]),
) as Record<DiaryDetailType, { border: string; bg: string }>;
