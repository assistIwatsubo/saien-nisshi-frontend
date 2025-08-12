import { DiaryEntry } from "@/types/diary";

export const diaryEntries: DiaryEntry[] = [
  {
    id: "10",
    user: { id: "u01", name: "Yuka" },
    date: "2025-08-08",
    title: "夏野菜の収穫と防除",
    summary: "トマトとピーマンを収穫し、防除作業を行った。",
    details: [
      {
        id: "d01",
        type: "crop",
        fields: { cropName: "トマト", fieldName: "西畑" },
        memo: "糖度が高く育った。",
      },
      {
        id: "d02",
        type: "pesticide",
        fields: {
          cropName: "ピーマン",
          pesticideName: "ベストガード",
          concentration: "0.1%",
        },
      },
      {
        id: "d03",
        type: "other",
        fields: {},
        memo: "畝間除草も同時に実施。",
      },
    ],
  },
  {
    id: "9",
    user: { id: "u02", name: "佐藤 花子" },
    date: "2025-08-06",
    title: "とうもろこし収穫準備",
    summary: "来週収穫予定のとうもろこし畑を確認した。",
    details: [
      {
        id: "d01",
        type: "crop",
        fields: { cropName: "とうもろこし", fieldName: "南区画" },
      },
    ],
  },
  {
    id: "8",
    user: { id: "u01", name: "Yuka" },
    date: "2025-08-05",
    title: "畝立て作業と種まき",
    summary: "にんじん用の畝立てと種まきを行った。",
    details: [
      {
        id: "d01",
        type: "crop",
        fields: { cropName: "にんじん", fieldName: "東畑" },
        memo: "条間20cmで播種。",
      },
      {
        id: "d02",
        type: "other",
        fields: {},
        memo: "防鳥ネットを仮設置。",
      },
      {
        id: "d03",
        type: "other",
        fields: {},
        memo: "防鳥ネットを仮設置。",
      },
    ],
  },
  {
    id: "7",
    user: { id: "u03", name: "田中 実" },
    date: "2025-08-04",
    title: "作業準備日",
    summary: "本日は作業準備のみ。実作業は明日以降。",
    details: [],
  },
  {
    id: "6",
    user: { id: "u01", name: "Yuka" },
    date: "2025-08-03",
    title: "定植作業と防除",
    summary: "ブロッコリーの定植と防除を同時に実施した。",
    details: [
      {
        id: "d01",
        type: "crop",
        fields: { cropName: "ブロッコリー", fieldName: "中央畑" },
      },
      {
        id: "d02",
        type: "pesticide",
        fields: {
          cropName: "ブロッコリー",
          pesticideName: "アファーム乳剤",
          concentration: "0.2%",
        },
      },
    ],
  },
  {
    id: "5",
    user: { id: "u01", name: "Yuka" },
    date: "2025-08-02",
    title: "収穫と管理作業",
    summary: "ズッキーニの収穫と潅水作業を実施した。",
    details: [
      {
        id: "d01",
        type: "crop",
        fields: { cropName: "ズッキーニ", fieldName: "北西畑" },
      },
      {
        id: "d02",
        type: "other",
        fields: {},
        memo: "潅水タイマーの設定を変更。",
      },
    ],
  },
  {
    id: "4",
    user: { id: "u01", name: "Yuka" },
    date: "2025-07-28",
    title: "畑作業日誌",
    summary: "今日はたくさん作業しました",
    details: [
      {
        id: "d01",
        type: "crop",
        fields: {
          cropName: "ネギ",
          fieldName: "北山",
        },
        memo: "作業メモ～～～～～",
      },
      {
        id: "d02",
        type: "pesticide",
        fields: {
          cropName: "人参",
          pesticideName: "マラソン乳剤",
          concentration: "10%",
        },
      },
      {
        id: "d03",
        type: "pesticide",
        fields: {
          cropName: "人参",
          pesticideName: "マラソン乳剤",
          concentration: "10%",
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
      "一日中雨が降り続き、畑には一歩も出られなかったため、予定していた作業はすべて中止となった。",
    details: [],
  },
];
