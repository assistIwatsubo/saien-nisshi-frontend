export type ScheduleEntry = {
  id: string;
  title: string;
  start: string;
  end?: string;
  status: "pending" | "in-progress" | "done";
};
