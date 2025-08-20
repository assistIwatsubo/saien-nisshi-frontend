import { fetchSafe } from "@/lib/utils/fetchSate";
import { getScheduleByDate } from "@/lib/getSchedule";
import { getFormattedDate } from "@/lib/utils/format-date";
import { Sticky } from "./sticky";

type Props = {
  date: string;
};

export default async function ScheduleSummary({ date }: Props) {
  const scheduleEntry = await fetchSafe(() => getScheduleByDate(date));

  return scheduleEntry && scheduleEntry.length > 0 ? (
    <div
      data-layout="schedule"
      className="mt-4 flex flex-wrap gap-2 border-t-1 border-dotted border-gray-300 p-2"
    >
      {scheduleEntry?.map((entry) => (
        <Sticky
          key={entry.id}
          className="flex flex-col items-center justify-start gap-1 px-2 py-1"
        >
          <p className="text-sm">{entry.title}</p>
          <p className="text-xs text-gray-600">
            <time dateTime={entry.start}>
              {getFormattedDate(new Date(entry.start))}
            </time>
            {entry.end && (
              <>
                ～
                <time dateTime={entry.end}>
                  {getFormattedDate(new Date(entry.end))}
                </time>
              </>
            )}
          </p>
        </Sticky>
      ))}
    </div>
  ) : null;
}
