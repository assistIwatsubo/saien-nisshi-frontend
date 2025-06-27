import { CommunityDiaryEntry } from "@/types/community-diary";

export const communityDiaryEntries: CommunityDiaryEntry[] = [
  {
    id: "1",
    userId: "1",
    userName: "山田次郎",
    iconSrc: "/icons/sample-user-icon1.png",
    title: "今日は畑で収穫した野菜を記録しました",
    dateTime: "2025-06-08",
  },
  {
    id: "2",
    userId: "2",
    userName: "佐藤花子",
    iconSrc: "/icons/sample-user-icon2.png",
    title: "苗の育ち方を比較してみました",
    dateTime: "2025-06-15",
  },
  {
    id: "3",
    userId: "3",
    userName: "田中大地",
    iconSrc: "/icons/sample-user-icon3.png",
    title: "台風対策のメモ",
    dateTime: "2025-06-20",
  },
];
