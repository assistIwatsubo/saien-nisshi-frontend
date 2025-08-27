import { getDateParts } from "@/lib/utils/format-date";

type Props = {
  iso?: string;
};

export default function DailyCalendarDisplay({ iso }: Props) {
  const date = iso ? new Date(iso) : new Date();
  const { iso: formattedIso, year, month, day, weekday } = getDateParts(date);

  return (
    <time
      dateTime={formattedIso}
      className="flex w-auto flex-col items-stretch justify-start bg-white font-bold shadow-md"
    >
      <span className="bg-gray-100 text-center text-gray-400">{year}</span>
      <div className="flex w-auto flex-col items-stretch justify-start px-4 py-1">
        <span className="text-2xl leading-6">{month}/</span>
        <span className="text-4xl">{day}</span>
        <span className="whitespace-nowrap">{weekday}</span>
      </div>
    </time>
  );
}
