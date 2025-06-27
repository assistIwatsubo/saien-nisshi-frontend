type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "danger";
  shape?: "rectangle" | "rounded";
  fullWidth?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  color = "primary",
  shape = "rectangle",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const colorClasses = {
    primary:
      "bg-[var(--app-primary-color)] text-white hover:bg-[var(--app-secondary-color)] hover:border-[var(--app-secondary-color)] border-[var(--app-primary-color)]",
    secondary:
      "bg-[var(--app-secondary-color)] text-white hover:bg-[var(--app-home-base-color)] border-[var(--app-secondary-color)] hover:border-[var(--app-home-base-color)] hover:text-[var(--app-primary-color)]",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const shapeClasses = {
    rectangle: "rounded-md",
    rounded: "rounded-full",
  };

  const baseClass = [
    "px-4 py-2 border-2 font-bold transition duration-150",
    fullWidth ? "w-full" : "inline-block",
    shapeClasses[shape],
    colorClasses[color],
    disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
