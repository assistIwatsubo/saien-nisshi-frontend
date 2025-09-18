import Link from "next/link";
import {
  getFormattedDate,
  getFormattedDateTime,
} from "@/lib/utils/format-date";
import { getScheduleTimePhase } from "@/lib/getScheduleTimePhase";
import { scheduleTimePhaseColorMap } from "@/lib/utils/color-map";
import type { ScheduleEntry } from "@/types/schedule";
import ChangeScheduleStatus from "../molecules/change-schedule-status";
import { Sticky } from "./sticky";

type Props = {
  entry: ScheduleEntry;
  variant?: "simple" | "detailed";
};

export default function ScheduleDisplay({
  entry,
  variant = "detailed",
}: Props) {
  const displayStatus = getScheduleTimePhase(entry);

  return (
    <Sticky
      className={`${variant === "detailed" ? "w-full" : "w-fit"} relative h-full flex-grow`}
    >
      <div
        className={`h-full border-b-2 bg-[var(--app-base-color)] p-2 text-center ${scheduleTimePhaseColorMap[displayStatus]}`}
      >
        {variant === "simple" ? (
          <Link
            href={`/terrace/diary/schedule/${entry.id}/edit`}
            className="flex w-full flex-col items-stretch justify-start gap-4"
          >
            <p className="leading-6 text-[var(--foreground)]">
              {entry.title}
              <span className="mt-1 block text-xs font-normal text-gray-500">
                <time dateTime={entry.start}>
                  {getFormattedDate(new Date(entry.start))}
                </time>
                {entry.end && (
                  <>
                    <br />～{" "}
                    <time dateTime={entry.end}>
                      {getFormattedDate(new Date(entry.end))}
                    </time>
                  </>
                )}
              </span>
            </p>
          </Link>
        ) : (
          <div className="flex flex-col items-start justify-start gap-4 px-4">
            <div className="flex max-w-3/4 items-center justify-start gap-4">
              {entry.status !== "unused" && (
                <ChangeScheduleStatus initialStatus={entry.status} />
              )}
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                {entry.title}
              </h3>
            </div>
            <Link
              href={`/terrace/diary/schedule/${entry.id}/edit`}
              className="flex w-full flex-col items-stretch justify-start gap-4 text-left"
            >
              <p className="px-1 text-left text-sm text-gray-600">
                <time dateTime={entry.start}>
                  {getFormattedDateTime(entry.start)}
                </time>
                {entry.end && (
                  <>
                    <span className="mx-1">～</span>
                    <time dateTime={entry.end}>
                      {getFormattedDateTime(entry.end)}
                    </time>
                  </>
                )}
              </p>
              {entry.memo && (
                <p className="mb-2 w-full rounded-sm bg-white/50 px-2 py-1 text-left text-gray-700">
                  {entry.memo}
                </p>
              )}
            </Link>
          </div>
        )}
      </div>
    </Sticky>
  );
}
