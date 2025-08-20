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
    <div className="flex items-start justify-start gap-0">
      <h4
        className={`app-text-shadow flex w-6 items-center rounded-l-md border-2 px-1 font-bold text-white ${bg} ${border}`}
        style={{ writingMode: "vertical-rl" }}
      >
        {typeLabels[detail.type]}
      </h4>
      <div
        className={`flex w-full flex-col gap-2 rounded-xl rounded-tl-none border-2 ${border} bg-white/50 px-6 py-4 shadow-sm`}
      >
        {tagFieldKeys.some((key) => detail.fields[key]) && (
          <div className="flex flex-wrap items-center gap-2">
            {tagFieldKeys.map((key) => {
              const value = detail.fields[key];
              return value ? (
                <Tag key={key} type={detail.type} label={String(value)} />
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

        <div className="flex flex-wrap items-center justify-start gap-2">
          {/* タグ以外のフィールドを縦に表示 */}
          {otherFieldKeys.length > 0 &&
            otherFieldKeys.map((key) => {
              const value = detail.fields[key];
              return (
                <div
                  key={key}
                  className="flex items-center justify-start gap-0.5"
                >
                  <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs text-gray-600">
                    {fieldLabels[key] || key}
                  </span>
                  <span className="p-2">{value ?? "記入なし"}</span>
                </div>
              );
            })}
        </div>
        {/* 作業メモ */}
        {detail.memo && (
          <div className="flex flex-col gap-2">
            <p className="rounded-md bg-white/50 p-2 text-gray-600">
              {detail.memo}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
