"use client";

import { useScheduleStatus } from "@/hooks/useScheduleStatus";
import type { ScheduleStatus } from "@/types/schedule";
import { Square, SquareCheck } from "lucide-react";

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
          ? "border-green-500 text-green-400"
          : "border-dashed border-red-400 text-red-400"
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
