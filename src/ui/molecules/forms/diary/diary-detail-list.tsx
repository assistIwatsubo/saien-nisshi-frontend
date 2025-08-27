"use client";

import { useState, useEffect } from "react";
import DiaryDetailForm from "./diary-detail-form";
import Button from "@/ui/atoms/button";
import { DiaryDetail, fieldLabelType } from "@/types/diary";
import { v4 as uuidv4 } from "uuid";

type Card = {
  id: string;
  detail?: DiaryDetail;
};

type Props = {
  values?: DiaryDetail[];
  tags?: Record<fieldLabelType, string[]>;
  onChange?: (updated: DiaryDetail[]) => void;
};

export default function DiaryDetailList({
  values = [],
  tags,
  onChange,
}: Props) {
  const [cards, setCards] = useState<Card[]>(() =>
    values.map((detail) => ({ id: uuidv4(), detail })),
  );

  useEffect(() => {
    if (values.length > 0) {
      setCards(values.map((detail) => ({ id: uuidv4(), detail })));
    }
  }, [values]);

  const updateParent = (updatedCards: Card[]) => {
    onChange?.(updatedCards.map((c) => c.detail!).filter(Boolean));
  };

  const handleAddCard = () => {
    const newCard: Card = { id: uuidv4(), detail: undefined };
    setCards((prev) => {
      const updated = [...prev, newCard];
      updateParent(updated);
      return updated;
    });
  };

  const handleRemoveCard = (id: string) => {
    setCards((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      updateParent(updated);
      return updated;
    });
  };

  const handleUpdateCard = (id: string, detail: DiaryDetail) => {
    setCards((prev) => {
      const updated = prev.map((c) => (c.id === id ? { ...c, detail } : c));
      updateParent(updated);
      return updated;
    });
  };

  return (
    <div className="w-full space-y-8">
      {cards.map((card, index) => (
        <DiaryDetailForm
          key={card.id}
          id={card.id}
          index={index}
          detail={card.detail}
          tags={tags}
          onChange={(detail) => handleUpdateCard(card.id, detail)}
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
