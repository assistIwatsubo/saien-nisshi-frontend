"use client";

type TagProps =
  | { label: string; as?: "span" }
  | { label: string; as: "button"; onClick: () => void };

export function Tag(props: TagProps) {
  const className = "inline-block rounded-full px-2 py-1 text-xs";

  switch (props.as) {
    case "button":
      return (
        <button
          type="button"
          onClick={props.onClick}
          className={`${className} bg-[var(--app-primary-color)] font-bold text-white`}
        >
          {props.label}
        </button>
      );
    default:
      return (
        <span
          className={`${className} border border-[var(--app-secondary-color)] text-[var(--app-secondary-color)]`}
        >
          {props.label}
        </span>
      );
  }
}
