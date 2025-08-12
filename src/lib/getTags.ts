// アプリ内でタグとして取得するデータを取得するための関数（今のところは日誌モックデータ内で使用されたfieldLabelTypeの登録値を取得し、整理して返すが、将来的にはtagsテーブルからデータを取得）

import { getDiaryList } from "@/lib/getDiary";
import { FIELD_LABEL_TYPES, fieldLabelType } from "@/types/diary";

export const getTags = async (): Promise<Record<fieldLabelType, string[]>> => {
  const diaryEntries = await getDiaryList();

  // 初期化（空配列）
  const tags: Record<fieldLabelType, Set<string>> = {
    cropName: new Set(),
    fieldName: new Set(),
    pesticideName: new Set(),
    concentration: new Set(),
    dilutionRate: new Set(),
  };

  diaryEntries.forEach((entry) => {
    entry.details?.forEach((detail) => {
      FIELD_LABEL_TYPES.forEach((key) => {
        const val = detail.fields[key];
        if (val && val.trim() !== "") {
          tags[key].add(val.trim());
        }
      });
    });
  });

  // Setから配列に変換
  const result = FIELD_LABEL_TYPES.reduce(
    (acc, key) => {
      acc[key] = Array.from(tags[key]);
      return acc;
    },
    {} as Record<fieldLabelType, string[]>,
  );

  return result;
};
