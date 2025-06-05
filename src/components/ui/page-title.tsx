import { getFormattedDate } from "@/lib/format-date";
type Props = {
  variant?: "today" | "editting" | "past";
};

export default function PageTitle({ variant = "today" }: Props) {
  const formatted = getFormattedDate();

  let content: string;

  switch (variant) {
    case "editting":
      content = `${formatted}の記録をつける`;
      break;
    case "past":
      content = `${formatted}ではない過去の日付`;
      break;
    case "today":
    default:
      content = formatted;
      break;
  }

  return <h2 className="font-bold">{content}</h2>;
}
