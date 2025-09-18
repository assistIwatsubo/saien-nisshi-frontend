import { Tag } from "../atoms/tag";
import { diaryTypeColorMap } from "@/lib/utils/color-map";
import { typeLabels, type DiaryDetail } from "@/types/diary";

type Props = {
  detail: DiaryDetail;
};

export default function DiaryDetailCard({ detail }: Props) {
  const { border, bg } = diaryTypeColorMap[detail.type];

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
        {/* 作物用 */}
        {detail.type === "crop" && (
          <Tag
            label={`${detail.crop_name}：${detail.field_name}`}
            type={detail.type}
          />
        )}

        {/* 薬剤用 */}
        {detail.type === "pesticide" && (
          <div className="flex flex-wrap items-center gap-2">
            <Tag
              label={`${detail.crop_name}：${detail.pesticide_name}`}
              type={detail.type}
            />

            {detail.field_name && (
              <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs text-gray-600">
                {detail.field_name}
              </span>
            )}

            {detail.concentration && (
              <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs text-gray-600">
                {detail.concentration
                  ? `濃度: ${detail.concentration}${detail.concentration_unit ?? ""}`
                  : ""}
                {detail.dilution_rate ? ` 希釈率: ${detail.dilution_rate}` : ""}
              </span>
            )}

            {detail.applied_amount && (
              <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs text-gray-600">
                {`散布量: ${detail.applied_amount}`}
                {detail.amount_unit}
              </span>
            )}
          </div>
        )}

        {/* その他用 */}
        {detail.type === "other" && detail.memo && (
          <div className="flex flex-col gap-2">
            <p className="rounded-md bg-white/50 p-2 text-gray-600">
              {detail.memo}
            </p>
          </div>
        )}

        {/* 共通メモ */}
        {detail.memo && detail.type !== "other" && (
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
