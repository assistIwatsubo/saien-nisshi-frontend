"use client";

import { useState } from "react";
import DiaryDetailMenu from "@/ui/diary/diary-detail-menu";
import LinkButtonMini from "../atoms/link-button-mini";
import { Tag } from "../atoms/tag";
import { diaryTypeColorMap } from "@/lib/utils/color-map";
import { DIARY_DETAIL_TYPES, type DiaryDetailType } from "@/types/diary";

type Props = {
  id: number;
  index: number;
  onRemove: (id: number) => void;
};

// データリスト定義
const sakumotsuList = ["ネギ", "人参"];
const hojoList = ["北山", "山田さんの"];
const yakuzaiList = ["マラソン乳剤", "スミチオン"];

// DiaryDetailTypeをキーに持つ項目マップ
const fieldMap: Record<DiaryDetailType, { label: string; tags?: string[] }[]> =
  {
    作物: [
      { label: "作物名", tags: sakumotsuList },
      { label: "圃場名", tags: hojoList },
    ],
    薬剤: [
      { label: "薬剤名", tags: yakuzaiList },
      { label: "作物名", tags: sakumotsuList },
      { label: "圃場名", tags: hojoList },
      { label: "濃度" },
      { label: "希釈倍率" },
    ],
    その他: [],
  };

export default function DiaryDetailCard({ id, index, onRemove }: Props) {
  const [selectedType, setSelectedType] = useState<DiaryDetailType>(
    DIARY_DETAIL_TYPES[0],
  );

  const { border, bg } = diaryTypeColorMap[selectedType];

  const currentFields = fieldMap[selectedType];

  return (
    <div
      className={`relative flex w-full flex-col gap-8 rounded-xl border-2 ${border} shadow-sm} bg-white/50 p-6`}
    >
      <DiaryDetailMenu
        selected={selectedType}
        onChange={setSelectedType}
        name={`detail-${id}`}
      />

      {currentFields.map(({ label, tags }) => (
        <div
          className="flex flex-col items-center justify-start gap-8"
          key={label}
        >
          <div className="flex w-full items-stretch justify-start gap-8">
            <h4 className="min-w-1/6 py-2">{label}</h4>
            <div className="flex w-full flex-col gap-2">
              <input
                type="text"
                placeholder={`${label}を入力もしくは選択してください`}
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
              />
              {tags && (
                <div className="flex w-full flex-wrap items-center justify-start gap-2">
                  {tags.map((tag, i) => (
                    <Tag key={i} label={tag} as="span" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <h4>作業メモ</h4>
        <textarea
          name="matome"
          id="matome"
          placeholder="今日はどんなことをしましたか？　気になったことや作業ごとの感想があればここに書いてください。"
          className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
        ></textarea>
      </div>

      <div className="w-full py-4 text-center">
        <div className="flex w-full items-center justify-center gap-2 py-1">
          <input
            type="checkbox"
            name="sabun"
            id="sabun"
            className="scale-120"
          />
          <label className="pb-1" htmlFor="sabun">
            前日差分を表示する
          </label>
        </div>
        <LinkButtonMini href="/" label="写真を撮影する" variant="secondary" />
        {index !== 0 && (
          <button
            type="button"
            onClick={() => onRemove(id)}
            className={`absolute top-0 right-0 h-6 w-6 rounded-tr-lg rounded-bl-lg ${bg} app-text-shadow flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4" // ← 線の太さを指定（ここがポイント）
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
