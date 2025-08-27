"use client";

import { useState, useEffect } from "react";
import DiaryDetailMenu from "./diary-detail-menu";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import { Tag } from "@/ui/atoms/tag";
import { diaryTypeColorMap } from "@/lib/utils/color-map";
import {
  DIARY_DETAIL_TYPES,
  type DiaryDetailType,
  type fieldLabelType,
  type DiaryDetail,
  fieldLabels,
} from "@/types/diary";

type Props = {
  id: string;
  index: number;
  detail?: DiaryDetail;
  onChange: (detail: DiaryDetail) => void;
  onRemove: (id: string) => void;
  tags?: Record<fieldLabelType, string[]>;
};

export default function DiaryDetailForm({
  id,
  index,
  detail,
  onChange,
  onRemove,
  tags,
}: Props) {
  const [selectedType, setSelectedType] = useState<DiaryDetailType>(
    DIARY_DETAIL_TYPES[0],
  );

  const [fieldValues, setFieldValues] = useState<
    Partial<Record<fieldLabelType, string>>
  >({});

  useEffect(() => {
    if (detail) {
      setSelectedType(detail.type);
      setFieldValues(detail.fields);
    }
  }, [detail]);

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

  const { border, bg } = diaryTypeColorMap[selectedType];
  const currentFieldKeys = typeFieldMap[selectedType];

  const updateDetail = (memo?: string) => {
    onChange({
      id,
      type: selectedType,
      fields: fieldValues,
      memo: memo ?? detail?.memo ?? "",
    });
  };

  return (
    <div
      className={`relative flex w-full flex-col gap-8 rounded-xl border-2 ${border} bg-white/50 p-6 shadow-sm`}
    >
      <DiaryDetailMenu
        selected={selectedType}
        onChange={(type) => {
          setSelectedType(type);
          setFieldValues({});
        }}
        name={`detail-${id}`}
      />

      {currentFieldKeys.map((key) => (
        <div
          key={key}
          className="flex flex-col items-center justify-start gap-8"
        >
          <div className="flex w-full items-stretch justify-start gap-8">
            <h4 className="min-w-1/6 py-2">{fieldLabels[key]}</h4>
            <div className="flex w-full flex-col gap-2">
              <input
                type="text"
                placeholder={`${fieldLabels[key]}を入力もしくは選択してください`}
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
                value={fieldValues[key] || ""}
                onChange={(e) => {
                  const newValues = { ...fieldValues, [key]: e.target.value };
                  setFieldValues(newValues);
                  updateDetail();
                }}
              />
              {tags && tags[key] && tags[key].length > 0 && (
                <div className="flex w-full flex-wrap items-center justify-start gap-2">
                  {tags[key].map((tag, i) => {
                    const isUsed = fieldValues[key]?.includes(tag) ?? false;

                    const handleTagClick = () => {
                      const prevValue = fieldValues[key] || "";
                      const newValue = isUsed
                        ? prevValue
                            .split(",")
                            .map((v) => v.trim())
                            .filter((v) => v !== tag)
                            .join(", ")
                        : prevValue
                          ? `${prevValue}, ${tag}`
                          : tag;

                      const newValues = { ...fieldValues, [key]: newValue };
                      setFieldValues(newValues);
                      updateDetail();
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
          placeholder="今日はどんなことをしましたか？"
          className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
          value={detail?.memo ?? ""}
          onChange={(e) => updateDetail(e.target.value)}
        />
      </div>

      <div className="w-full py-4 text-center">
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
