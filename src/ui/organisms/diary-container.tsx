import { DiaryEntry } from "@/types/diary";
import DiaryDetailCard from "../diary/diary-detail-card";
import { getFormattedDate } from "@/lib/utils/format-date";

type Props = {
  diaryEntries: DiaryEntry[] | undefined;
};

export default function DiaryContainer({ diaryEntries }: Props) {
  return (
    <ol className="flex h-full snap-x snap-mandatory gap-4 divide-x-1 divide-dashed divide-[#f87171] overflow-x-auto py-2">
      {diaryEntries?.map((entry, index) => (
        <li
          key={entry.diaryId ?? index}
          className="w-full flex-shrink-0 snap-start"
        >
          <section className="overflow-y-auto p-4">
            <hgroup className="flex items-center justify-start gap-4 pb-4">
              <h3 className="text-xl">
                {getFormattedDate(new Date(entry.date))}
              </h3>
              <p className="text-lg font-semibold">{entry.title}</p>
            </hgroup>
            <p>{entry.summary}</p>

            {entry.details && entry.details.length > 0 && (
              <div
                data-role="diary-content-details"
                className="mt-8 h-full flex-1 overflow-hidden rounded-lg bg-gray-200/40 px-4 py-8"
              >
                <h4 className="mb-8 text-center text-lg">詳細</h4>
                <div className="w-full space-y-8 overflow-y-auto">
                  {entry.details.map((detail, i) => (
                    <DiaryDetailCard key={i} detail={detail} />
                  ))}
                </div>
              </div>
            )}
          </section>
        </li>
      ))}
    </ol>
  );
}
