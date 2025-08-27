type DiarySummaryProps = {
  value?: string;
  onChange: (value: string) => void;
};

export default function DiarySummaryForm({
  value,
  onChange,
}: DiarySummaryProps) {
  return (
    <label>
      <textarea
        name="diary-summary"
        id="summary"
        placeholder="ここに今日のまとめを書けます。感想やメモにお使いください。"
        className="w-full px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
