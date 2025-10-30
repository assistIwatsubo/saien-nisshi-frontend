"use client";

import { useState, ChangeEvent } from "react";
import { PlanEntry } from "@/types/plan";
import { FieldData } from "@/types/user-data";
import { Plus } from "lucide-react";

type Props = {
  parentCommonStyle: string;
  childrenCommonStyle: string;
  planEntries?: PlanEntry[];
  fields?: FieldData[];
};

export default function PlantingPlanForm({
  parentCommonStyle,
  childrenCommonStyle,
  planEntries,
  fields,
}: Props) {
  const childrenStyle = `${childrenCommonStyle} w-30 border-gray-300 p-2 text-center`;

  const [plans, setPlans] = useState<PlanEntry[]>(planEntries || []);

  const handleFieldChange = (fieldId: number, newName: string) => {
    setPlans((prev) =>
      prev.map((entry) =>
        entry.fieldId === fieldId ? { ...entry, fieldName: newName } : entry,
      ),
    );
  };

  return (
    <>
      {plans.map((field, index) => (
        <div key={field.fieldId} className="flex">
          {field.crops.length > 0 ? (
            field.crops.map((crop) => (
              <ol
                key={crop.cropFieldId}
                className={`divide-gray-300 ${parentCommonStyle} ml-0.5`}
              >
                {/* 畑名の入力欄 */}
                <li
                  className={`relative line-clamp-2 bg-gray-300/25 ${childrenStyle}`}
                >
                  <input
                    type="text"
                    list={`field-list-${index}`}
                    id={`field-name-${index}`}
                    name={`field-name-${index}`}
                    value={field.fieldName}
                    className="inline-flex w-full items-center rounded-sm border-2 border-[var(--app-border-gray)] bg-white"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleFieldChange(field.fieldId, e.target.value)
                    }
                  />
                  {/* datalist（選択候補） */}
                  {fields && (
                    <datalist id={`field-list-${index}`} className="w-full">
                      {fields.map((fieldItem) => (
                        <option key={fieldItem.id} value={fieldItem.name}>
                          {fieldItem.name}
                        </option>
                      ))}
                    </datalist>
                  )}
                </li>

                {/* 割合 */}
                <li
                  className={`bg-gray-300/25 ${childrenStyle} inline-flex items-center`}
                >
                  <input
                    type="text"
                    id={`field-ratio-${index}`}
                    name={`field-ratio-${index}`}
                    value={crop.fieldRatio}
                    className="inline-flex w-full items-center rounded-sm border-2 border-[var(--app-border-gray)] bg-white"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleFieldChange(field.fieldId, e.target.value)
                    }
                  />
                  %
                </li>

                {/* 作物名 */}
                <li className={`line-clamp-2 bg-gray-300/25 ${childrenStyle}`}>
                  <input
                    type="text"
                    list={`field-list-${index}`}
                    id={`crop-name-${index}`}
                    name={`crop-name-${index}`}
                    value={crop.cropName}
                    className="inline-flex w-full items-center rounded-sm border-2 border-[var(--app-border-gray)] bg-white"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleFieldChange(field.fieldId, e.target.value)
                    }
                  />
                </li>

                {/* 月ごとの作業 */}
                {Array.from({ length: 12 }, (_, i) => {
                  const monthNumber = i + 1;
                  const plan = crop.plans?.find((p) => p.month === monthNumber);

                  return (
                    <li
                      key={`${crop.cropFieldId}-${monthNumber}`}
                      className={childrenStyle}
                    >
                      <input
                        type="text"
                        list={`plans-${index}`}
                        id={`plans-${index}`}
                        name={`plans-${index}`}
                        value={plan?.action || ""}
                        className="inline-flex w-full items-center rounded-sm border-2 border-[var(--app-border-gray)] bg-white"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleFieldChange(field.fieldId, e.target.value)
                        }
                      />
                    </li>
                  );
                })}
              </ol>
            ))
          ) : (
            <p className="text-sm text-gray-400">作物データがありません</p>
          )}
        </div>
      ))}
      <div className="w-12 self-stretch p-2">
        <button className="h-full rounded border-2 border-white bg-[var(--app-home-base-color)]/50 p-1 font-bold shadow-sm">
          <Plus />
          計画を追加する
        </button>
      </div>
    </>
  );
}
