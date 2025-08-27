type DiarySummaryProps = {
  value?: string;
  onChange: (value: string) => void;
};

export default function DiaryTitleForm({ value, onChange }: DiarySummaryProps) {
  return (
    <label>
      <input
        type="text"
        name="diary-title"
        id="title"
        placeholder="今日のまとめ　タイトル"
        className="w-full border-b border-[var(--app-border-gray)] px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
