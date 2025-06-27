import UserIcon from "../atoms/user-icon";
import UserComment from "../atoms/user-comment";
import { CommunityDiaryEntry } from "@/types/community-diary";
import ErrorMessage from "../atoms/error-message";

type CommunityDiaryProps = {
  communityDiary: CommunityDiaryEntry[] | null;
};

export default function CommunityDiaryList({
  communityDiary,
}: CommunityDiaryProps) {
  return (
    <ul className="flex flex-col gap-4 py-4">
      {!communityDiary ? (
        <ErrorMessage message="フォローしているユーザーの投稿の取得に失敗しました" />
      ) : communityDiary.length === 0 ? (
        <ErrorMessage message="フォローしているユーザーの投稿がありません" />
      ) : (
        communityDiary.map((entry) => (
          <li
            key={entry.id}
            className="flex flex-1 items-start justify-start gap-6"
          >
            <UserIcon
              userId={entry.userId}
              iconSrc={entry.iconSrc}
              userName={entry.userName}
            />
            <UserComment
              id={entry.id}
              userId={entry.userId}
              title={entry.title}
              dateTime={entry.dateTime}
            />
          </li>
        ))
      )}
    </ul>
  );
}
