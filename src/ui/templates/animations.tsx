"use client";
import { useEffect, useState } from "react";

export function FadeOutOnScroll({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY <= 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}
    >
      {children}
    </div>
  );
}
