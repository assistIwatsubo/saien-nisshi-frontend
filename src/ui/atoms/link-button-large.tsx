import Link from "next/link";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

const variantColorMap: Record<string, string> = {
  primary:
    "border-[var(--app-primary-color)] text-[var(--app-primary-color)] hover:bg-[var(--app-primary-color)] hover:text-white",
  secondary:
    "border-[var(--app-secondary-color)] text-[var(--app-secondary-color)] hover:bg-[var(--app-secondary-color)] hover:text-white",
  // ここに将来的に新しいバリアントを追加可能
};

export default function LinkButtonLarge({
  href,
  label,
  variant = "primary",
}: LinkButtonProps) {
  const colorClass = variantColorMap[variant] ?? variantColorMap.primary;

  return (
    <Link
      href={href}
      className={`block w-3/4 rounded-md border-3 px-4 py-2 font-bold ${colorClass} max-w-[80%] bg-white text-center shadow-md duration-150 md:max-w-1/2`}
    >
      {label}
    </Link>
  );
}
