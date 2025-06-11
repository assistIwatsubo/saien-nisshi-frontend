import { getFormattedDate } from "@/lib/format-date";
type Props = {
  variant?: "today" | "create" | "edit" | "past";
};

export default function PageTitle({ variant = "today" }: Props) {
  const today = getFormattedDate();
  const date = "6月5日(木)";

  let content: string;

  switch (variant) {
    case "create":
      content = `${today}の記録をつける`;
      break;
    case "edit":
      content = `${date}の記録を編集する`;
      break;
    case "past":
      content = `${date}`;
      break;
    case "today":
    default:
      content = today;
      break;
  }

  return <h2 className="font-bold">{content}</h2>;
}
