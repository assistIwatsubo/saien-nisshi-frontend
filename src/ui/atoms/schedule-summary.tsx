import { getFormattedDate } from "@/lib/utils/format-date";
import { Sticky } from "./sticky";
import { ScheduleEntry } from "@/types/schedule";

type Props = {
  scheduleEntries: ScheduleEntry[];
};

export default async function ScheduleSummary({ scheduleEntries }: Props) {
  return scheduleEntries && scheduleEntries.length > 0 ? (
    <div
      data-layout="schedule"
      className="mt-4 flex flex-wrap gap-2 border-t-1 border-dotted border-gray-300 p-2"
    >
      {scheduleEntries?.map((entry) => (
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
