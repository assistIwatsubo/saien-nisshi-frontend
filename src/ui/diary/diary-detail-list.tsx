"use client";

import { useState } from "react";
import DiaryDetailCard from "./diary-detail-card";
import Button from "../atoms/button";

export default function DiaryDetailList() {
  const [cards, setCards] = useState<number[]>([Date.now()]); // カードIDのリスト

  const handleAddCard = () => {
    setCards((prev) => [...prev, Date.now()]);
  };

  const handleRemoveCard = (id: number) => {
    setCards((prev) => prev.filter((c) => c !== id));
  };

  return (
    <div className="w-full space-y-8">
      {cards.map((id, index) => (
        <DiaryDetailCard
          key={id}
          id={id}
          index={index}
          onRemove={handleRemoveCard}
        />
      ))}

      <div className="mb-4 text-center">
        <Button onClick={handleAddCard} color="secondary">
          項目を追加する
        </Button>
      </div>
    </div>
  );
}
