import { useState } from "react";
import type { ScheduleStatus } from "@/types/schedule";

export function useScheduleStatus(initialStatus: ScheduleStatus) {
  const [status, setStatus] = useState<ScheduleStatus>(initialStatus);

  const toggleStatus = () => {
    setStatus((prev) => (prev === "done" ? "undone" : "done"));
  };

  return { status, toggleStatus };
}
