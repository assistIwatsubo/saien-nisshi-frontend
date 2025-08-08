"use client";

import Link from "next/link";
import {
  PencilLine,
  BookOpenText,
  ListTodo,
  Sprout,
  Pencil,
  X,
} from "lucide-react";

type Props = {
  href: "today" | "diary" | "schedule" | "terrace" | "edit" | "cancel";
  editSuffixPath?: string; // editのときに付け足すパスを渡せるように
};

const IconComponentMap: Record<
  NonNullable<Props["href"]>,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  today: PencilLine,
  diary: BookOpenText,
  schedule: ListTodo,
  terrace: Sprout,
  edit: Pencil,
  cancel: X,
};

const LabelMap: Record<NonNullable<Props["href"]>, string> = {
  today: "記録をする",
  diary: "日誌を見る",
  schedule: "予定を確認",
  terrace: "縁側に戻る",
  edit: "編集する",
  cancel: "編集中止",
};

const linkHrefMap = (
  editSuffixPath?: string,
): Record<NonNullable<Props["href"]>, string> => ({
  today: "/terrace/today",
  diary: "/terrace/diary/",
  schedule: "/terrace/schedule/",
  terrace: "/terrace/",
  edit: editSuffixPath
    ? `/terrace/diary/${editSuffixPath}/edit`
    : "/terrace/diary/",
  cancel: `/terrace/diary/${editSuffixPath}`,
});

export default function LinkButtonWithIcon({ href, editSuffixPath }: Props) {
  const IconComponent = IconComponentMap[href];
  const label = LabelMap[href];

  const linkHref = linkHrefMap(editSuffixPath)[href];

  // 鉛筆だけ回転させるクラス
  const iconClassName = href === "edit" ? "rotate-180" : "";

  return (
    <Link
      href={linkHref}
      className={`rounded-md border-4 border-[var(--app-primary-color)] p-2 text-center font-bold shadow-md backdrop-blur-sm ${href === "terrace" ? "app-text-shadow bg-[var(--app-primary-color)]/50 text-lime-100" : "bg-white/75 text-[var(--app-primary-color)]"}`}
    >
      <IconComponent
        color="currentColor"
        width={40}
        height={40}
        className={`m-auto ${iconClassName}`}
      />
      {label}
    </Link>
  );
}
