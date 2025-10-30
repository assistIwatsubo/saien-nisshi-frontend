import UserIcon from "../atoms/user-icon";
import UserComment from "../atoms/user-comment";
import { FollowingDiaryEntry } from "@/types/community-diary";
import ErrorMessage from "../atoms/error-message";

type FollowingDiaryProps = {
  followingDiaries: FollowingDiaryEntry[];
};

export default function FollowingDiaryList({
  followingDiaries,
}: FollowingDiaryProps) {
  return (
    <ul className="flex flex-col gap-4 py-4">
      {!followingDiaries ? (
        <ErrorMessage message="フォローしているユーザーの投稿の取得に失敗しました" />
      ) : followingDiaries.length === 0 ? (
        <ErrorMessage message="フォローしているユーザーの投稿がありません" />
      ) : (
        followingDiaries.map((entry) => (
          <li
            key={entry.userSlug}
            className="flex flex-1 items-start justify-start gap-6"
          >
            <div className="flex flex-col items-center justify-start gap-0.5">
              <UserIcon
                userSlug={entry.userSlug}
                iconSrc={entry.imageUrl}
                userName={entry.userName}
              />
              <span className="text-xs text-gray-600">{entry.userName}</span>
            </div>
            <UserComment
              diaryId={entry.diaryId}
              userSlug={entry.userSlug}
              title={entry.title}
              date={entry.date}
            />
          </li>
        ))
      )}
    </ul>
  );
}
