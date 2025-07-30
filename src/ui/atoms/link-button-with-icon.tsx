import Link from "next/link";
import { PencilLine, BookOpenText, ListTodo, Sprout } from "lucide-react";

type Props = {
  href: "today" | "diary" | "schedule" | "terrace";
};

const IconComponentMap: Record<
  NonNullable<Props["href"]>,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  today: PencilLine,
  diary: BookOpenText,
  schedule: ListTodo,
  terrace: Sprout,
};
const LabelMap: Record<NonNullable<Props["href"]>, string> = {
  today: "記録をする",
  diary: "日誌を見る",
  schedule: "予定を確認",
  terrace: "縁側に戻る",
};

export default function LinkButtonWithIcon({ href }: Props) {
  const IconComponent = IconComponentMap[href];
  const label = LabelMap[href];

  return (
    <Link
      href={href !== "terrace" ? `/terrace/${href}` : `/terrace/`}
      className="rounded-md border-4 border-[var(--app-primary-color)] bg-white/75 p-2 text-center font-bold text-[var(--app-primary-color)] shadow-md backdrop-blur-sm"
    >
      <IconComponent
        color="currentColor"
        width={40}
        height={40}
        className="m-auto"
      />
      {label}
    </Link>
  );
}
