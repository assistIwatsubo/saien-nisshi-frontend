import React from "react";

export type DiaryDetailType = "crop" | "pesticide" | "other";

type PieChartProps = {
  types: DiaryDetailType[];
  size?: number; // default: 16px
};

const TYPE_COLORS: Record<DiaryDetailType, string> = {
  crop: "#05DF72",
  pesticide: "#51A2FF",
  other: "#99A1AF",
};

export default function PieChart({ types, size = 30 }: PieChartProps) {
  const total = types.length;

  const counts = types.reduce<Record<DiaryDetailType, number>>(
    (acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    },
    {
      crop: 0,
      pesticide: 0,
      other: 0,
    },
  );

  let cumulative = 0;

  const slices = Object.entries(counts)
    .filter(([, count]) => count > 0)
    .map(([type, count]) => {
      const start = cumulative / total;
      const end = (cumulative + count) / total;
      cumulative += count;

      const x1 = Math.cos(2 * Math.PI * start);
      const y1 = Math.sin(2 * Math.PI * start);
      const x2 = Math.cos(2 * Math.PI * end);
      const y2 = Math.sin(2 * Math.PI * end);
      const largeArcFlag = end - start > 0.5 ? 1 : 0;

      const pathData = [
        `M 0 0`,
        `L ${x1} ${y1}`,
        `A 1 1 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        `Z`,
      ].join(" ");

      return (
        <path
          key={type}
          d={pathData}
          fill={TYPE_COLORS[type as DiaryDetailType]}
        />
      );
    });

  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1 2 2"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-90deg)",
        zIndex: -1,
      }}
    >
      {/* 背景の薄灰色円 */}
      <circle cx={0} cy={0} r={1} fill="#ffffff" style={{ zIndex: -1 }} />
      {slices}
    </svg>
  );
}
