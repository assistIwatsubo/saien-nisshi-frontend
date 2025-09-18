type DiarySummaryProps = {
  titleValue: string;
  summaryValue: string;
  clamped?: boolean;
};

export default function DiarySummary({
  titleValue = "",
  summaryValue = "",
  clamped = false,
}: DiarySummaryProps) {
  return (
    <div
      data-role="diary-content-summary"
      className={`bg-transparent" } flex w-full flex-col gap-2 rounded-sm border-none`}
    >
      <label>
        <p
          className={`w-full border-b border-[var(--app-border-gray)] px-2 py-1 ${titleValue ? "text-gray-700" : "text-gray-500"}`}
        >
          {titleValue || "（タイトルなし）"}
        </p>
      </label>
      <label>
        <div
          className={`w-full px-2 py-1 ${clamped && "line-clamp-2"} ${summaryValue ? "text-gray-700" : "text-gray-500"}`}
          title={summaryValue}
        >
          {summaryValue || "（まとめ未記入）"}
        </div>
      </label>
    </div>
  );
}
