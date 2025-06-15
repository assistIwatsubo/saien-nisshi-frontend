import Link from "next/link";

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  color?: "primary" | "secondary";
  shape?: "rectangle" | "rounded";
  fullWidth?: boolean;
};

export default function LinkButton({
  children,
  href = "/",
  color = "primary",
  shape = "rectangle",
  fullWidth = true,
}: LinkButtonProps) {
  const colorClasses = {
    primary:
      "border-[var(--app-primary-color)] text-[var(--app-primary-color)] hover:bg-[var(--app-primary-color)] hover:text-white",
    secondary:
      " border-[var(--app-secondary-color)] text-[var(--app-secondary-color)] hover:bg-[var(--app-secondary-color)] hover:text-white",
  };

  const shapeClasses = {
    rectangle: "rounded-md",
    rounded: "rounded-full",
  };

  const baseClass = [
    "px-4 py-2 font-bold transition duration-150 bg-white border-2",
    fullWidth ? "w-full" : "inline-block",
    shapeClasses[shape],
    colorClasses[color],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={baseClass} href={href}>
      {children}
    </Link>
  );
}
