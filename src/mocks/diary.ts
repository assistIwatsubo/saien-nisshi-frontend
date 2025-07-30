import { DiaryEntry } from "@/types/diary";

export const diaryEntries: DiaryEntry[] = [
  {
    id: "4",
    user: { id: "u01", name: "Yuka" },
    date: "2025-07-28",
    title: "畑作業日誌",
    summary: "今日はたくさん作業しました",
    details: [
      {
        id: "d01",
        type: "作物",
        fields: {
          作物名: "ネギ",
          圃場名: "北山",
        },
      },
      {
        id: "d02",
        type: "薬剤",
        fields: {
          作物名: "人参",
          薬剤名: "マラソン乳剤",
          濃度: "10%",
        },
      },
    ],
  },
  {
    id: "3",
    user: {
      id: "user_001",
      name: "山田 太郎",
      avatarUrl: "/avatars/user001.png",
    },
    date: "2025-04-14",
    title: "山田さんとエダマメの誘引",
    summary:
      "山田さんちに植えた方が草丈５０センチを超えてきたので、山田さんに教わりながら誘引しました。",
    tags: ["エダマメ"],
    details: [],
  },
  {
    id: "2",
    user: {
      id: "user_001",
      name: "山田 太郎",
      avatarUrl: "/avatars/user001.png",
    },
    date: "2025-04-13",
    title: "支柱立てとマルチング作業",
    summary:
      "午前中は支柱立て、午後からマルチングを実施。風が強くてビニールの固定に苦戦した。",
    tags: ["支柱", "マルチング", "天候"],
    details: [],
  },
  {
    id: "1",
    user: {
      id: "user_001",
      name: "山田 太郎",
      avatarUrl: "/avatars/user001.png",
    },
    date: "2025-04-12",
    title: "雨天のため作業中止",
    summary:
      "一日中雨が降り続き、畑には一歩も出られなかったため、予定していた作業はすべて中止となった。午前中はこれまでの栽培記録や収穫量のデータを整理し直し、Excelで作成していた管理表の形式も見直した。午後は昨年の天候傾向や作業日誌を振り返りながら、今後の作付け計画を再検討。特にエダマメとサツマイモの配置を変更する可能性が出てきた。雨の日はこうした頭を使う作業に集中できるので、悪くない時間の使い方だったと思う。",
    tags: ["雨天", "作業なし"],
    details: [],
  },
];
