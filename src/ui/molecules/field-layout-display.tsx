import { LayoutData } from "@/types/user-data";
import { Sprout } from "lucide-react";

type Props = {
  layout: LayoutData;
};

const pxPerCm = 0.5; // ← 縮尺（1cmを何pxで描くか）

export default function FieldLayoutDisplay({ layout }: Props) {
  const direction = layout.direction;

  return (
    <section key={layout.layoutId} className="w-full flex-shrink-0">
      <h4
        id={`layout-${layout.layoutId}`}
        className="flex items-center justify-center gap-2 text-[var(--app-primary-color)]"
      >
        <Sprout />
        {`${layout.title}(${layout.fieldName})`}
      </h4>

      {/* gapをlayout.gap(cm)で動的に反映 */}
      <div
        className="mt-4 flex items-start justify-start overflow-auto border-t border-dashed border-gray-300 p-4"
        style={{
          gap: layout.gap * pxPerCm, // 畝間の通路幅
        }}
      >
        {layout.ridges?.map((ridge) => (
          <div
            key={ridge.ridgeId}
            className="relative flex pt-12"
            style={{
              flexDirection: direction === "vertical" ? "column" : "row",
              gap: 8,
            }}
          >
            <h5 className="absolute top-0 left-0 z-10 line-clamp-2 text-xs">
              {ridge.name}
            </h5>

            {/* 畝本体 */}
            <div
              className="flex overflow-hidden rounded border"
              style={{
                width: direction === "vertical" ? ridge.size * pxPerCm : 200,
                height: direction === "horizontal" ? ridge.size * pxPerCm : 200,

                flexDirection: "column",
              }}
            >
              {ridge.ridgeDetails?.map((detail) => (
                <div
                  key={detail.ridgeDetailId}
                  className="flex items-center justify-center border-t text-center text-[10px] text-gray-800 [writing-mode:vertical-rl] first:border-none"
                  style={{
                    flexGrow: detail.ratio,
                    backgroundColor: getCropColor(detail.cropName),
                  }}
                >
                  {detail.cropName}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- crop color ----
function getCropColor(name: string) {
  const map: Record<string, string> = {
    キャベツ: "#86efac",
    ブロッコリー: "#4ade80",
    にんにく: "#facc15",
    トマト: "#f87171",
    空白: "#e5e7eb",
  };
  return map[name] || "#d1d5db";
}
