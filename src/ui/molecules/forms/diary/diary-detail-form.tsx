"use client";

import { useState, useEffect } from "react";
import DiaryDetailMenu from "./diary-detail-menu";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import { Tag } from "@/ui/atoms/tag";
import { diaryTypeColorMap } from "@/lib/utils/color-map";
import {
  DIARY_DETAIL_TYPES,
  type DiaryDetailType,
  type DiaryDetail,
  // type CropDetail,
  type PesticideDetail,
  // type OtherDetail,
  fieldLabels,
  type FieldLabelType,
} from "@/types/diary";

type Props = {
  id: string;
  index: number;
  detail?: DiaryDetail;
  onChange: (detail: DiaryDetail) => void;
  onRemove: (id: string) => void;
  tags?: Record<FieldLabelType, string[]>;
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

  const [detailValues, setDetailValues] = useState<
    Partial<Record<FieldLabelType, string>>
  >({});

  // タイプごとのフィールドキー
  const typeFieldKeys: Record<DiaryDetailType, FieldLabelType[]> = {
    crop: ["cropName", "fieldName"],
    pesticide: [
      "cropName",
      "fieldName",
      "pesticideName",
      "concentration",
      "dilutionRate",
      "appliedAmount",
    ],
    other: [],
  };

  const { border, bg } = diaryTypeColorMap[selectedType];
  const currentFieldKeys = typeFieldKeys[selectedType];

  // detail が渡ってきたら detailValues に変換
  useEffect(() => {
    if (!detail) return;
    setSelectedType(detail.type);
    const values: Partial<Record<FieldLabelType | "memo", string>> = {};
    switch (detail.type) {
      case "crop":
        values.cropName = detail.cropName.join(", ");
        values.fieldName = detail.fieldName.join(", ");
        break;
      case "pesticide":
        values.cropName = detail.cropName;
        values.fieldName = detail.fieldName.join(", ");
        values.pesticideName = detail.pesticideName;
        values.concentration = detail.concentration ?? "";
        values.dilutionRate = detail.dilutionRate ?? "";
        values.appliedAmount = detail.appliedAmount ?? "";
        break;
      case "other":
        break;
    }
    values.memo = detail.memo ?? ""; // ← 追加
    setDetailValues(values);
  }, [detail]);

  const updateDetail = (memo?: string) => {
    if (!detail) return;

    let newDetail: DiaryDetail;
    switch (selectedType) {
      case "crop":
        newDetail = {
          id,
          diaryId: detail.diaryId,
          type: "crop",
          cropName: (detailValues.cropName ?? "")
            .split(",")
            .map((v) => v.trim()),
          fieldName: (detailValues.fieldName ?? "")
            .split(",")
            .map((v) => v.trim()),
          memo: memo ?? detail.memo ?? "",
        };
        break;
      case "pesticide":
        newDetail = {
          id,
          diaryId: detail.diaryId,
          type: "pesticide",
          cropName: detailValues.cropName ?? "",
          fieldName: (detailValues.fieldName ?? "")
            .split(",")
            .map((v) => v.trim()),
          pesticideName: detailValues.pesticideName ?? "",
          concentration: detailValues.concentration,
          dilutionRate: detailValues.dilutionRate,
          appliedAmount: detailValues.appliedAmount,
          amountUnit: (detail as PesticideDetail).amountUnit,
          memo: memo ?? detail.memo ?? "",
        };
        break;
      case "other":
        newDetail = {
          id,
          diaryId: detail.diaryId,
          type: "other",
          memo: memo ?? detail.memo ?? "",
        };
        break;
    }
    onChange(newDetail);
  };

  return (
    <div
      className={`relative flex w-full flex-col gap-8 rounded-xl border-2 ${border} bg-white/50 p-6 shadow-sm`}
    >
      <DiaryDetailMenu
        selected={selectedType}
        onChange={(type) => {
          setSelectedType(type);
          setDetailValues({});
        }}
        name={`detail-${id}`}
      />

      {currentFieldKeys.map((key) => (
        <div
          key={key}
          className="flex flex-col items-center justify-start gap-2"
        >
          <div className="flex w-full flex-col items-stretch justify-start gap-2 md:flex-row md:gap-4">
            <h4 className="min-w-[120px] md:py-4">{fieldLabels[key]}</h4>
            <div className="flex w-full flex-col gap-2">
              <input
                type="text"
                placeholder={`${fieldLabels[key]}を入力もしくは選択してください`}
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
                value={detailValues[key] || ""}
                onChange={(e) => {
                  const newValues = { ...detailValues, [key]: e.target.value };
                  setDetailValues(newValues);
                  updateDetail();
                }}
              />
              {tags && tags[key] && tags[key].length > 0 && (
                <div className="flex w-full flex-wrap items-center justify-start gap-2">
                  {tags[key].map((tag, i) => {
                    const isUsed = detailValues[key]?.includes(tag) ?? false;

                    const handleTagClick = () => {
                      const prevValue = detailValues[key] || "";
                      const newValue = isUsed
                        ? prevValue
                            .split(",")
                            .map((v) => v.trim())
                            .filter((v) => v !== tag)
                            .join(", ")
                        : prevValue
                          ? `${prevValue}, ${tag}`
                          : tag;

                      const newValues = { ...detailValues, [key]: newValue };
                      setDetailValues(newValues);
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
          value={detailValues.memo ?? ""}
          onChange={(e) => {
            const newValues = { ...detailValues, memo: e.target.value };
            setDetailValues(newValues);
            updateDetail(e.target.value);
          }}
        />
      </div>

      <div className="w-full py-4 text-center">
        <LinkButtonMini href="/" label="写真を撮影する" variant="secondary" />
      </div>
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
  );
}
