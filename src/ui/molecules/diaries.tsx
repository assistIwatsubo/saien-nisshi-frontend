import Link from "next/link";
import { Tag } from "../atoms/tag";
import { DiaryEntry } from "@/types/diary";
import ErrorMessage from "../atoms/error-message";

type DiaryProps = {
  entries: DiaryEntry[] | null;
};

export default function Diaries({ entries }: DiaryProps) {
  return (
    <div data-role="home-menu__display">
      <ol className="flex flex-col gap-4">
        {!entries ? (
          <ErrorMessage message="日誌の取得に失敗しました" />
        ) : entries.length === 0 ? (
          <ErrorMessage message="日誌がありません" />
        ) : (
          entries.map((entry) => (
            <li key={entry.date}>
              <Link href={`/diary/${entry.id}`}>
                <article className="app-blurred-bg-white flex gap-4 rounded-md border-2 border-[var(--app-secondary-color)] p-4">
                  <time
                    dateTime={entry.date}
                    className="my-auto flex w-auto flex-col items-stretch justify-start font-bold"
                  >
                    <span className="text-2xl">
                      {entry.date.split("-")[1]}/
                    </span>
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
                    <p className="line-clamp-3 text-sm">{entry.summary}</p>
                    <div data-role="tags-display" className="mt-2 flex gap-2">
                      {(entry.tags ?? []).map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </li>
          ))
        )}
      </ol>
    </div>
  );
}
