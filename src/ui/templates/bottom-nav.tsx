"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function BottomNav({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`sticky right-0 bottom-0 left-0 bg-[var(--app-home-base-color)]/25 backdrop-blur-sm transition-all duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} `}
    >
      <nav className="m-auto flex max-w-xl items-stretch justify-between p-4">
        {children}
      </nav>
    </div>
  );
}
