type DiarySummaryProps = {
  readonly?: boolean;
  titleValue?: string;
  summaryValue?: string;
};

export default function DiarySummary({
  readonly = false,
  titleValue = "",
  summaryValue = "",
}: DiarySummaryProps) {
  return (
    <div
      data-role="diary-content-summary"
      className={`flex w-full flex-col gap-2 rounded-sm ${
        readonly
          ? "border-none bg-transparent"
          : "border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
      }`}
    >
      <label>
        {readonly ? (
          <p className="w-full border-b border-[var(--app-border-gray)] px-2 py-1">
            {titleValue || "（タイトルなし）"}
          </p>
        ) : (
          <input
            type="text"
            name="diary-title"
            id="title"
            placeholder="今日のまとめ　タイトル"
            className="w-full border-b border-[var(--app-border-gray)] px-2 py-1"
            defaultValue={titleValue ?? ""}
          />
        )}
      </label>

      <label>
        {readonly ? (
          <div
            className="line-clamp-2 w-full px-2 py-1 text-gray-700"
            title={summaryValue}
          >
            {summaryValue || "（まとめ未記入）"}
          </div>
        ) : (
          <textarea
            name="diary-summary"
            id="summary"
            placeholder="ここに今日のまとめを書けます。感想やメモにお使いください。"
            className="w-full px-2 py-1"
            defaultValue={summaryValue ?? ""}
          />
        )}
      </label>
    </div>
  );
}
