"use client";

import { useState } from "react";
import CarouselNavigation from "../molecules/carousel-navigation";

type View = {
  label: string; // ラベル（中央タイトル・ボタン表示）
  colorClass: string; // テーマ色（ボタン背景色などに使用）
  content: React.ReactNode; // 実際の表示内容
};

type HomeMenuProps = {
  views: View[];
};

export default function HomeMenu({ views }: HomeMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % views.length);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + views.length) % views.length);

  const active = views[activeIndex];
  const prev = views[(activeIndex - 1 + views.length) % views.length];
  const next = views[(activeIndex + 1) % views.length];

  return (
    <section>
      <CarouselNavigation
        onNext={handleNext}
        onPrev={handlePrev}
        currentLabel={active.label}
        prevLabel={prev.label}
        nextLabel={next.label}
        currentColor={active.colorClass}
        prevColor={prev.colorClass}
        nextColor={next.colorClass}
      />
      <div className="py-8">{active.content}</div>
    </section>
  );
}
