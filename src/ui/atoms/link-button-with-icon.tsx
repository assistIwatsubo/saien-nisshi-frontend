"use client";

import Link from "next/link";
import {
  PencilLine,
  BookOpenText,
  HousePlus,
  Pencil,
  X,
  CalendarPlus,
  FilePen,
  FilePenLine,
  Grid2X2,
  Grid2X2Plus,
} from "lucide-react";

type Variant =
  | "editor"
  | "archive"
  | "terrace"
  | "schedule"
  | "plan"
  | "layout";
type Mode = "create" | "edit" | "cancel";
type ButtonType = "diary" | "schedule";

type Props = {
  variant: Variant;
  mode?: Mode;
  editSuffixPath?: string;
  type?: ButtonType; // optional
};

const resolveConfig = (
  variant: Variant,
  mode?: Mode,
  editSuffixPath?: string,
  type?: ButtonType,
) => {
  const defaultSet = {
    icon: HousePlus,
    label: "縁側に戻る",
    href: "/terrace",
  };
  switch (variant) {
    case "archive":
      return {
        icon: BookOpenText,
        label: "日誌一覧へ",
        href: "/terrace/diary",
      };
    case "plan":
      switch (mode) {
        case "edit":
          return {
            icon: FilePenLine,
            label: "作付計画表を編集",
            href: "/terrace/plan/edit",
          };
        case "cancel":
          return {
            icon: X,
            label: "編集中止",
            href: "/terrace/plan",
          };
        default:
          return {
            icon: FilePen,
            label: "作付計画表",
            href: "/terrace/plan",
          };
      }
    case "layout":
      switch (mode) {
        case "edit":
          return {
            icon: Grid2X2Plus,
            label: "作付図を編集",
            href: "/terrace/layout/edit",
          };
        case "cancel":
          return {
            icon: X,
            label: "編集中止",
            href: "/terrace/layout",
          };
        default:
          return {
            icon: Grid2X2,
            label: "作付図を見る",
            href: "/terrace/layout",
          };
      }
    case "editor":
      if (type === "diary") {
        switch (mode) {
          case "edit":
            return {
              icon: Pencil,
              label: "日誌を編集",
              href: `/terrace/diary/${editSuffixPath ?? ""}/editor`,
            };
          case "cancel":
            return {
              icon: X,
              label: "編集中止",
              href: `/terrace/diary/${editSuffixPath ?? ""}`,
            };
          case "create":
          default:
            return {
              icon: PencilLine,
              label: "日誌を書く",
              href: `/terrace/diary/${editSuffixPath ?? ""}/editor`,
            };
        }
      } else if (type === "schedule") {
        switch (mode) {
          case "edit":
            return {
              icon: CalendarPlus,
              label: "予定を編集",
              href: `/terrace/schedule/${editSuffixPath ?? "/terrace"}/editor`,
            };
          case "cancel":
            return {
              icon: X,
              label: "編集中止",
              href: `/terrace/schedule/${editSuffixPath ?? "/terrace"}`,
            };
          case "create":
          default:
            return {
              icon: CalendarPlus,
              label: "予定を作成",
              href: "/terrace/schedule/create",
            };
        }
      } else {
        return defaultSet;
      }
    case "terrace":
    default:
      return defaultSet;
  }
};

export default function LinkButtonWithIcon({
  variant,
  mode,
  editSuffixPath,
  type,
}: Props) {
  const {
    icon: IconComponent,
    label,
    href,
  } = resolveConfig(variant, mode, editSuffixPath, type);

  const iconClassName = type === "diary" && mode === "edit" ? "rotate-180" : "";

  return (
    <Link
      href={href ?? "/terrace"}
      className={`rounded-md border-4 border-[var(--app-primary-color)] p-2 text-center font-bold shadow-md backdrop-blur-sm ${
        variant === "terrace" && !mode
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
