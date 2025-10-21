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
            label={`${detail.diary_detail_crop?.crop_name}：${detail.diary_detail_crop?.field_name}`}
            type={detail.type}
          />
        )}

        {/* 薬剤用 */}
        {detail.type === "pesticide" && (
          <div className="flex flex-wrap items-center gap-2">
            <Tag
              label={`${detail.diary_detail_pesticide?.crop_name}：${detail.diary_detail_pesticide?.pesticide_name}（${detail.diary_detail_pesticide?.field_name ?? "圃場名未設定"}）`}
              type={detail.type}
            />

            {detail.diary_detail_pesticide?.concentration && (
              <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs text-gray-600">
                {`濃度: ${detail.diary_detail_pesticide?.concentration}${detail.diary_detail_pesticide?.concentration_unit ?? ""}`}
              </span>
            )}
            {detail.diary_detail_pesticide?.dilution_rate && (
              <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs text-gray-600">
                {`希釈倍率: ${detail.diary_detail_pesticide?.dilution_rate}`}
              </span>
            )}

            {detail.diary_detail_pesticide?.amount && (
              <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs text-gray-600">
                {`散布量: ${detail.diary_detail_pesticide?.amount}${detail.diary_detail_pesticide?.amount_unit ?? ""}`}
              </span>
            )}
          </div>
        )}

        {/* 共通メモ */}
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
