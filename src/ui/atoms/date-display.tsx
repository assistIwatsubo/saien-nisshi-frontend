// components/FormattedDate.tsx
import { getISODate } from "@/lib/utils/iso-date";

type Props = {
  date?: Date;
};

export default function FormattedDate({ date }: Props) {
  const targetDate = date ?? new Date(); // ← ここがポイント
  const iso = getISODate(targetDate);

  return (
    <time
      dateTime={iso}
      className="flex w-auto flex-col items-stretch justify-start border-t-6 border-gray-100 bg-white px-4 py-1 font-bold shadow-md"
    >
      <span className="text-2xl leading-6">{Number(iso.split("-")[1])}/</span>
      <span className="text-4xl">{Number(iso.split("-")[2])}</span>
      <span className="whitespace-nowrap">
        {targetDate.toLocaleDateString("ja-JP", {
          weekday: "long",
        })}
      </span>
    </time>
  );
}
