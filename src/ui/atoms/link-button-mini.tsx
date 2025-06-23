// components/atoms/LinkButtonMini.tsx
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "base";
};

const variantColorMap: Record<string, string> = {
  primary:
    "border-[var(--app-primary-color)] text-[var(--app-primary-color)] hover:bg-[var(--app-primary-color)] hover:text-white",
  secondary:
    "border-[var(--app-secondary-color)] ttext-[var(--app-primary-color)] hover:bg-[var(--app-secondary-color)] hover:text-white",
  base: "border-[var(--app-home-base-color)] ttext-[var(--app-primary-color)] hover:bg-[var(--app-home-base-color)] hover:text-white",
  // ここに将来的に新しいバリアントを追加可能
};

export default function LinkButtonMini({
  href,
  label,
  variant = "primary",
}: Props) {
  const colorClass = variantColorMap[variant] ?? variantColorMap.primary;

  return (
    <Link
      href={href}
      className={`inline-block rounded-md border-3 px-3 py-1 font-bold shadow-md transition ${colorClass} bg-white`}
    >
      {label}
    </Link>
  );
}
