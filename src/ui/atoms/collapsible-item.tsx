import { ChevronRight } from "lucide-react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}

export function CollapsibleItem({
  title,
  children,
  open = false,
}: CollapsibleProps) {
  return (
    <details
      className="group rounded-md border-2 border-[var(--app-border-gray)] bg-white p-1 shadow-md"
      open={open}
    >
      <summary className="flex cursor-pointer items-center">
        <span className="mr-2 transition-transform group-open:rotate-90">
          <ChevronRight />
        </span>
        <h4>{title}</h4>
      </summary>
      <div className="ml-8 py-2">{children}</div>
    </details>
  );
}
