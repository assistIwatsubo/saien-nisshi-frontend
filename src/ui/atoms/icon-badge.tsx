import { Pencil, Info, HelpCircle } from "lucide-react";

type FloatingBadgeIconProps = {
  type: "pencil" | "info" | "help"; // 必要に応じて追加
};

export default function IconBadge({ type }: FloatingBadgeIconProps) {
  let icon = null;
  let bgColor = "";

  switch (type) {
    case "pencil":
      icon = <Pencil className="h-2/3 w-auto" />;
      bgColor = "bg-[var(--app-primary-color)]";
      break;
    case "info":
      icon = <Info className="h-4 w-4" />;
      bgColor = "bg-blue-500";
      break;
    case "help":
      icon = <HelpCircle className="h-4 w-4" />;
      bgColor = "bg-green-500";
      break;
    default:
      return null;
  }

  return (
    <span
      className={`flex h-full w-full items-center justify-center rounded-full text-white ${bgColor}`}
    >
      {icon}
    </span>
  );
}
