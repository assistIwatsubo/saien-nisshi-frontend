// components/atoms/Sticky.tsx
type StickyProps = {
  children: React.ReactNode;
  className?: string; // 追加の Tailwind クラスを渡せる
};

export function Sticky({ children, className = "" }: StickyProps) {
  return (
    <div
      className={`border-t-4 border-amber-100 bg-[var(--app-base-color)] shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
