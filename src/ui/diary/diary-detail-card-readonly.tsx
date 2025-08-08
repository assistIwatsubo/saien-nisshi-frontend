import { Tag } from "../atoms/tag";
import { diaryTypeColorMap } from "@/lib/utils/color-map";
import {
  typeLabels,
  fieldLabels,
  type DiaryDetail,
  fieldLabelType,
} from "@/types/diary";

type Props = {
  id: number;
  detail: DiaryDetail;
};

// タグとして表示するフィールド（英語キー）
const tagFieldKeys: fieldLabelType[] = ["cropName", "fieldName"];

export default function DiaryDetailCardReadonly({ detail }: Props) {
  const { border, bg } = diaryTypeColorMap[detail.type];
  const allFieldKeys = Object.keys(detail.fields).filter(
    (key): key is fieldLabelType => key in fieldLabels,
  );
  const otherFieldKeys = allFieldKeys.filter(
    (key) => !tagFieldKeys.includes(key),
  );

  return (
    <div
      className={`relative flex w-full flex-col gap-4 rounded-xl rounded-tl-none border-2 ${border} bg-white/50 p-6 shadow-sm`}
    >
      <h4
        className={`app-text-shadow rounded-t-md px-2 font-bold text-white ${bg} absolute -top-8 -left-0.5 translate-y-1 py-0.5`}
      >
        {typeLabels[detail.type]}
      </h4>

      {tagFieldKeys.some((key) => detail.fields[key]) && (
        <div className="flex flex-wrap items-center gap-2">
          {tagFieldKeys.map((key) => {
            const value = detail.fields[key];
            return value ? (
              <Tag key={key} label={String(value)} />
            ) : (
              <p
                key={key}
                className="inline-block rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-500"
              >
                {fieldLabels[key]}記入なし
              </p>
            );
          })}
        </div>
      )}

      {/* タグ以外のフィールドを縦に表示 */}
      {otherFieldKeys.length > 0 &&
        otherFieldKeys.map((key) => {
          const value = detail.fields[key];
          return (
            <div
              className="flex flex-col items-center justify-start gap-8"
              key={key}
            >
              <div className="flex w-full items-stretch justify-start gap-8">
                <p className="min-w-[6rem] py-2">{fieldLabels[key] || key}</p>
                <p className="w-full rounded-sm p-2">{value ?? "記入なし"}</p>
              </div>
            </div>
          );
        })}

      {/* 作業メモ */}
      <div className="flex flex-col gap-2">
        <p className="rounded-md bg-white/50 p-2 text-gray-600">
          {detail.memo || "記入なし"}
        </p>
      </div>
    </div>
  );
}
