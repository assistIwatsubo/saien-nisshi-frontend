import UserIcon from "../atoms/user-icon";
import UserComment from "../atoms/user-comment";
import { CommunityDiaryEntry } from "@/types/community-diary";

export const communityDiaryEntries: CommunityDiaryEntry[] = [
  {
    id: "1",
    userId: "1",
    userName: "山田次郎",
    iconSrc: "/icons/sample-user-icon.png",
    title: "今日は畑で収穫した野菜を記録しました",
    dateTime: "2025-06-08",
  },
  {
    id: "2",
    userId: "2",
    userName: "佐藤花子",
    iconSrc: "/icons/sample-user-icon-2.png",
    title: "苗の育ち方を比較してみました",
    dateTime: "2025-06-15",
  },
  {
    id: "3",
    userId: "3",
    userName: "田中大地",
    iconSrc: "/icons/sample-user-icon-3.png",
    title: "台風対策のメモ",
    dateTime: "2025-06-20",
  },
];

export default function CommunityDiaryList() {
  return (
    <ul className="flex flex-col gap-4 py-4">
      {communityDiaryEntries.map((entry) => (
        <li
          key={entry.id}
          className="flex flex-1 items-start justify-start gap-4"
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
      ))}
    </ul>
  );
}
