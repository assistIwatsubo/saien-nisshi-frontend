"use client";

import { useState, useEffect } from "react";
import DiaryDetailCardEditable from "./diary-detail-card-editable";
import DiaryDetailCardReadonly from "./diary-detail-card-readonly";
import Button from "../atoms/button";
import { DiaryDetail } from "@/types/diary";

type Props = {
  readonly?: boolean;
  initialDetails?: DiaryDetail[];
};

export default function DiaryDetailList({
  readonly = false,
  initialDetails = [],
}: Props) {
  const [cards, setCards] = useState<{ id: number; detail?: DiaryDetail }[]>(
    [],
  );

  useEffect(() => {
    if (initialDetails.length > 0) {
      setCards(
        initialDetails.map((detail, i) => ({
          id: i,
          detail,
        })),
      );
    } else if (!readonly) {
      setCards([{ id: Date.now() }]);
    }
  }, [readonly, initialDetails]);

  console.log(cards);
  const handleAddCard = () => {
    setCards((prev) => [...prev, { id: Date.now() }]);
  };

  const handleRemoveCard = (id: number) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="w-full space-y-12">
      {cards.map((card, index) =>
        readonly ? (
          card.detail ? (
            <DiaryDetailCardReadonly
              id={card.id}
              key={card.id}
              detail={card.detail}
            />
          ) : null
        ) : (
          <DiaryDetailCardEditable
            key={card.id}
            id={card.id}
            index={index}
            detail={card.detail}
            onRemove={handleRemoveCard}
          />
        ),
      )}

      {!readonly && (
        <div className="mb-4 text-center">
          <Button onClick={handleAddCard} color="secondary">
            項目を追加する
          </Button>
        </div>
      )}
    </div>
  );
}
