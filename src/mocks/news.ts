import type { NewsEntry } from "@/types/news";

export const newsEntries: NewsEntry[] = [
  {
    id: "bf1e103",
    date: "2025-08-20",
    title: "diaryとcalendarの調整",
    categories: ["update"],
    body: "日誌とカレンダー表示の調整を行いました。操作感の改善を目的としています。",
  },
  {
    id: "c5fe4fc",
    date: "2025-08-18",
    title: "スケジュール一覧周りの表示等調整",
    categories: ["update"],
    body: "スケジュール一覧の表示や細かなUIを調整しました。",
  },
  {
    id: "c22a28e",
    date: "2025-08-12",
    title: "カレンダー回りひと通り作成",
    categories: ["feature"],
    body: "カレンダー関連の主要な機能を一通り作成しました。",
  },
  {
    id: "cfd6039",
    date: "2025-08-08",
    title: "日誌登録、（過去分）編集、一覧表示、カレンダー表示まで作成",
    categories: ["feature"],
    body: "日誌登録、過去分の編集、一覧表示、カレンダー表示など、主要な機能を作成しました。",
  },
  {
    id: "f664d99",
    date: "2025-07-30",
    title: "diary系作成中",
    categories: ["feature"],
    body: "日誌関連機能の開発を進めています。途中段階の実装です。",
  },
  {
    id: "fc80c01",
    date: "2025-07-01",
    title: "gitattributesを追加してすべてのファイルでLFに書き換え",
    categories: ["system"],
    body: "改行コードをLFに統一するため、.gitattributesを追加しました。",
  },
];
