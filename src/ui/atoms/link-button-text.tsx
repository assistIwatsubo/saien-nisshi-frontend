import Link from "next/link";
import { CircleArrowRight, RefreshCcw } from "lucide-react";

type Props = {
  href: string;
  label: string;
  iconType?: "arrow" | "change";
};

const IconComponentMap: Record<
  NonNullable<Props["iconType"]>,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  arrow: CircleArrowRight,
  change: RefreshCcw,
};

export default function LinkButtonTextIcon({
  href,
  label,
  iconType = "arrow",
}: Props) {
  const IconComponent = IconComponentMap[iconType];

  return (
    <Link href={href} className="flex items-center justify-between gap-1 p-2">
      {label}
      <span className="text-[var(--app-border-gray)]">
        <IconComponent color="currentColor" />
      </span>
    </Link>
  );
}
