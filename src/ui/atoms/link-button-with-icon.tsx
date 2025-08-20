"use client";

import Link from "next/link";
import {
  PencilLine,
  BookOpenText,
  Sprout,
  Pencil,
  X,
  CalendarPlus,
} from "lucide-react";

type Props = {
  href: "today" | "diary" | "terrace" | "scheduleCreate";
  editSuffixPath?: string; // editのときに付け足すパスを渡せるように
  edit?: boolean;
  cancel?: boolean;
};

const IconComponentMap: Record<
  NonNullable<Props["href"]>,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  today: PencilLine,
  diary: BookOpenText,
  terrace: Sprout,
  scheduleCreate: CalendarPlus,
};

const LabelMap: Record<NonNullable<Props["href"]>, string> = {
  today: "記録をする",
  diary: "日誌一覧へ",
  terrace: "縁側に戻る",
  scheduleCreate: "予定を作成",
};

const linkHrefMap = (
  href: NonNullable<Props["href"]>,
  edit: boolean | undefined,
  cancel: boolean | undefined,
  editSuffixPath?: string,
): string => {
  if (cancel) {
    // キャンセルリンク
    switch (href) {
      case "diary":
        return editSuffixPath
          ? `/terrace/diary/${editSuffixPath}`
          : "/terrace/diary/";
      default:
        return "/";
    }
  }

  if (edit) {
    // 編集リンク
    switch (href) {
      case "diary":
        return editSuffixPath
          ? `/terrace/diary/${editSuffixPath}/edit`
          : "/terrace/diary/";
      default:
        return "/";
    }
  }

  // 通常リンク
  switch (href) {
    case "today":
      return "/terrace/diary/today";
    case "diary":
      return "/terrace/diary";
    case "terrace":
      return "/terrace";
    case "scheduleCreate":
      return "/terrace/diary/create/schedule/"; // ? 考え中…
    default:
      return "/";
  }
};

export default function LinkButtonWithIcon({
  href,
  editSuffixPath,
  edit,
  cancel,
}: Props) {
  // アイコン選択
  const IconComponent = cancel
    ? X
    : edit && href === "diary"
      ? Pencil
      : IconComponentMap[href];

  // ラベル選択
  const label = cancel
    ? "編集中止"
    : edit && href === "diary"
      ? "編集する"
      : LabelMap[href];

  const linkHref = linkHrefMap(href, edit, cancel, editSuffixPath);

  // 鉛筆アイコン回転は編集時のみ
  const iconClassName = edit ? "rotate-180" : "";

  return (
    <Link
      href={linkHref}
      className={`rounded-md border-4 border-[var(--app-primary-color)] p-2 text-center font-bold shadow-md backdrop-blur-sm ${
        href === "terrace" && !edit && !cancel
          ? "app-text-shadow bg-[var(--app-primary-color)]/50 text-lime-100"
          : "bg-white/75 text-[var(--app-primary-color)]"
      }`}
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
