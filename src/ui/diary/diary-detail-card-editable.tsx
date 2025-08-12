"use client";

import { useEffect, useState } from "react";
import DiaryDetailMenu from "@/ui/diary/diary-detail-menu";
import LinkButtonMini from "../atoms/link-button-mini";
import { Tag } from "../atoms/tag";
import { diaryTypeColorMap } from "@/lib/utils/color-map";
import {
  DIARY_DETAIL_TYPES,
  type DiaryDetailType,
  type fieldLabelType,
  type DiaryDetail,
  fieldLabels,
} from "@/types/diary";

type Props = {
  id: number;
  index: number;
  detail?: DiaryDetail;
  onRemove: (id: number) => void;
  tags?: Record<fieldLabelType, string[]>;
};

export default function DiaryDetailCardEditable({
  id,
  index,
  detail,
  onRemove,
  tags,
}: Props) {
  const [selectedType, setSelectedType] = useState<DiaryDetailType>(
    DIARY_DETAIL_TYPES[0],
  );

  const [fieldValues, setFieldValues] = useState<
    Partial<Record<fieldLabelType, string>>
  >({});

  // DiaryDetailType ごとの表示フィールド設定
  const typeFieldMap: Record<DiaryDetailType, fieldLabelType[]> = {
    crop: ["cropName", "fieldName"],
    pesticide: [
      "pesticideName",
      "cropName",
      "fieldName",
      "concentration",
      "dilutionRate",
    ],
    other: [],
  };

  // 初期化処理：detail が与えられたらセットする
  useEffect(() => {
    if (detail) {
      setSelectedType(detail.type);
      setFieldValues(detail.fields);
    }
  }, [detail]);

  const { border, bg } = diaryTypeColorMap[selectedType];
  const currentFieldKeys = typeFieldMap[selectedType];

  return (
    <div
      className={`relative flex w-full flex-col gap-8 rounded-xl border-2 ${border} bg-white/50 p-6 shadow-sm`}
    >
      <DiaryDetailMenu
        selected={selectedType}
        onChange={(type) => {
          setSelectedType(type);
          setFieldValues({}); // 種類変更時は入力値リセット
        }}
        name={`detail-${id}`}
      />

      {currentFieldKeys.map((key) => (
        <div
          className="flex flex-col items-center justify-start gap-8"
          key={key}
        >
          <div className="flex w-full items-stretch justify-start gap-8">
            <h4 className="min-w-1/6 py-2">{fieldLabels[key]}</h4>
            <div className="flex w-full flex-col gap-2">
              <input
                type="text"
                placeholder={`${fieldLabels[key]}を入力もしくは選択してください`}
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
                value={fieldValues[key] || ""}
                onChange={(e) =>
                  setFieldValues((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
              {tags && tags[key] && tags[key].length > 0 && (
                <div className="flex w-full flex-wrap items-center justify-start gap-2">
                  {tags[key].map((tag, i) => {
                    const isUsed = fieldValues[key]?.includes(tag) ?? false;

                    const handleTagClick = () => {
                      setFieldValues((prev) => {
                        const prevValue = prev[key] || "";

                        const newValue = isUsed
                          ? prevValue
                              .split(",")
                              .map((v) => v.trim())
                              .filter((v) => v !== tag)
                              .join(", ")
                          : prevValue
                            ? `${prevValue}, ${tag}`
                            : tag;

                        return {
                          ...prev,
                          [key]: newValue,
                        };
                      });
                    };

                    return (
                      <Tag
                        key={i}
                        type={selectedType}
                        label={tag}
                        as="button"
                        onClick={handleTagClick}
                        active={isUsed}
                      />
                    );
                  })}
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
              strokeWidth="4"
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
