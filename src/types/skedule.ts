export type Schedule = {
  id: string;
  title: string;
  start: string;
  end?: string;
  status: "pending" | "in-progress" | "done";
};
