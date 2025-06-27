"use client";

import { useDynamicButtons } from "@/hooks/useDynamicButtons";
import DynamicButtonsWrapper from "@/ui/organisms/dynamic-buttons-wrapper";

export default function DynamicButtonsArea() {
  const buttons = useDynamicButtons();

  return <DynamicButtonsWrapper>{buttons}</DynamicButtonsWrapper>;
}
