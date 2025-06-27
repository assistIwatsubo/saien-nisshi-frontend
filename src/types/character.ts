export type MypageState =
  | "not_started"
  | "in_progress"
  | "almost_done"
  | "completed";

export type HomeState =
  | "default"
  | "no_record_yet"
  | "recorded"
  | "morning"
  | "afternoon"
  | "night";

export type CommentCategory = "home" | "mypage";

// キャラクターコメント構造
export type CharacterCommentType = {
  home: Partial<Record<HomeState, string[]>>; // 状態別
  mypage: Record<MypageState, string[]>;
};
