"use client";

import { useScheduleStatus } from "@/hooks/useScheduleStatus";
import type { ScheduleStatus } from "@/types/schedule";
import { Square, SquareCheck } from "lucide-react";
import { scheduleStatus } from "@/lib/utils/color-map";

type Props = {
  initialStatus: ScheduleStatus;
};

export default function ChangeScheduleStatus({ initialStatus }: Props) {
  const { status, toggleStatus } = useScheduleStatus(initialStatus);

  const isDone = status === "done";

  return (
    <button
      type="button"
      onClick={toggleStatus}
      className={`absolute top-2 right-4 flex items-center justify-center rounded-full border-2 px-2 text-xs transition-colors duration-200 ${
        isDone
          ? ` ${scheduleStatus[status]}`
          : `border-dashed ${scheduleStatus[status]}`
      }`}
    >
      {isDone ? (
        <>
          <SquareCheck className="mr-1" size={15} /> 完了
        </>
      ) : (
        <>
          <Square className="mr-1" size={15} /> 完了にする？
        </>
      )}
    </button>
  );
}
