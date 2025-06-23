import Link from "next/link";
import { Tag } from "../atoms/tag";
import { DiaryEntry } from "@/types/diary";
import { comment } from "@/lib/fonts";

export const dummyDiaryEntries: DiaryEntry[] = [
  {
    id: "3",
    user: {
      id: "user_001",
      name: "山田 太郎",
      avatarUrl: "/avatars/user001.png",
    },
    date: "2025-04-14",
    title: "山田さんとエダマメの誘引",
    body: "山田さんちに植えた方が草丈５０センチを超えてきたので、山田さんに教わりながら誘引しました。",
    tags: ["エダマメ"],
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
    body: "午前中は支柱立て、午後からマルチングを実施。風が強くてビニールの固定に苦戦した。",
    tags: ["支柱", "マルチング", "天候"],
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
    body: "一日中雨が降り続き、畑には一歩も出られなかったため、予定していた作業はすべて中止となった。午前中はこれまでの栽培記録や収穫量のデータを整理し直し、Excelで作成していた管理表の形式も見直した。午後は昨年の天候傾向や作業日誌を振り返りながら、今後の作付け計画を再検討。特にエダマメとサツマイモの配置を変更する可能性が出てきた。雨の日はこうした頭を使う作業に集中できるので、悪くない時間の使い方だったと思う。",
    tags: ["雨天", "作業なし"],
  },
];

export default function DiariesList() {
  return (
    <div data-role="home-menu__display">
      <ol className="flex flex-col gap-4">
        {dummyDiaryEntries.map((entry) => (
          <li key={entry.date}>
            <Link href={`/diary/${entry.id}`}>
              <article className="app-blurred-bg-white flex gap-4 rounded-md border-2 border-[var(--app-secondary-color)] p-4">
                <time
                  dateTime={entry.date}
                  className="my-auto flex w-auto flex-col items-stretch justify-start font-bold"
                >
                  <span className="text-2xl">{entry.date.split("-")[1]}/</span>
                  <span className="mb-2 text-4xl">
                    {entry.date.split("-")[2]}
                  </span>
                  <span className="whitespace-nowrap">
                    {new Date(entry.date).toLocaleDateString("ja-JP", {
                      weekday: "long",
                    })}
                  </span>
                </time>
                <div
                  data-role="diary-preview"
                  className="flex flex-1 flex-col gap-2"
                >
                  <h4 className="containe border-b-1 leading-loose font-bold">
                    {entry.title}
                  </h4>
                  <p className="line-clamp-3 text-sm">{entry.body}</p>
                  <div data-role="tags-display" className="mt-2 flex gap-2">
                    {(entry.tags ?? []).map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
