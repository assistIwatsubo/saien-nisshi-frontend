import { characterComment } from "@/lib/character-comment";
import type { HomeState } from "@/types/character";

export const useCharacterComment = (homeState: HomeState): string => {
  const list =
    characterComment.home[homeState] ?? characterComment.home.default ?? [];
  return list[Math.floor(Math.random() * list.length)] ?? "こんにちは！";
};
