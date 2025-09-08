import {
  BookOpen,
  LibraryBig,
  Star,
  Smile,
  Lightbulb,
  BadgeHelpIcon,
  Sprout,
  Wrench,
} from "lucide-react";

type TitleH3Props = {
  label: string;
  id: string;
  type?: "likeTab" | "withLine";
  color?: "primary" | "secondary" | "accent" | "gray";
  iconType?:
    | "book"
    | "library"
    | "star"
    | "smile"
    | "lightbulb"
    | "badgeHelp"
    | "sprout"
    | "settings";
};

// ✅ LucideIcon型を使えば、型エラーも防げる
const iconMap: Record<
  NonNullable<TitleH3Props["iconType"]>,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  book: BookOpen,
  library: LibraryBig,
  star: Star,
  smile: Smile,
  lightbulb: Lightbulb,
  badgeHelp: BadgeHelpIcon,
  sprout: Sprout,
  settings: Wrench,
};

export default function TitleH3({
  label,
  id,
  type,
  color = "primary",
  iconType,
}: TitleH3Props) {
  const colorMap: Record<NonNullable<TitleH3Props["color"]>, string> = {
    primary: "var(--app-primary-color)",
    secondary: "var(--app-secondary-color)",
    accent: "var(--app-accent-color)",
    gray: "#666666",
  };

  const Icon = iconType ? iconMap[iconType] : null;
  const colorValue = colorMap[color];

  switch (type) {
    case "likeTab":
      return (
        <h3
          id={id}
          className="app-text-shadow w-fit rounded-t-md px-2 text-sm leading-6 font-bold text-white shadow-md"
          style={{ backgroundColor: colorValue }}
        >
          {label}
        </h3>
      );

    case "withLine":
      return (
        <h3 className="mb-4 flex items-center gap-2" id={id}>
          {Icon && (
            <span style={{ color: colorValue }}>
              <Icon color="currentColor" />
            </span>
          )}
          <span className="mr-1 whitespace-nowrap">{label}</span>
          <span
            className="h-px flex-grow"
            style={{ backgroundColor: colorValue }}
          />
        </h3>
      );

    default:
      return (
        <h3 className="mb-4 flex items-center gap-2 whitespace-nowrap" id={id}>
          {Icon && (
            <span style={{ color: colorValue }}>
              <Icon color="currentColor" />
            </span>
          )}
          {label}
        </h3>
      );
  }
}
