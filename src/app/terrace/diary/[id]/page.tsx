import { getDateParts } from "@/lib/utils/iso-date";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
import DiarySummary from "@/ui/diary/diary-summary";
import DiaryDetailList from "@/ui/diary/diary-detail-list";
import { diaryEntries } from "@/mocks/diary";

type Props = {
  params: {
    diaryId: string;
  };
};

export default async function Page({ params }: Props) {
  const { diaryId } = params;

  const diaryEntry = diaryEntries.find((entry) => entry.id === diaryId);

  if (!diaryEntry) {
    // 適宜 404 を表示させたい場合はここで return
    return (
      <div className="py-8 text-center text-red-500">
        指定された記録が見つかりません。
      </div>
    );
  }

  const { iso, month, day, weekday } = getDateParts(new Date(diaryEntry.date));

  return (
    <HatakeArea>
      <section
        data-layout="diary"
        className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 lg:max-w-4/5"
      >
        <h2 className="py-4 text-center text-xl text-gray-700">
          <time dateTime={iso} className="font-bold">
            {month}月{day}日（{weekday}）
          </time>
          の記録
        </h2>
        <div
          data-role="diary-contents"
          className="m-auto flex w-full flex-col items-center justify-start gap-8 py-8 lg:max-w-9/10"
        >
          <DiarySummary
            readonly
            titleValue={diaryEntry.title}
            summaryValue={diaryEntry.summary}
          />
          <div
            data-role="diary-content-details"
            className="mt-4 flex w-full flex-col items-center justify-start gap-8 border-t-1 border-b-1 border-dashed border-gray-400 px-4 py-8"
          >
            <h3 className="text-lg font-bold">詳細の記録</h3>
            <DiaryDetailList />
          </div>
        </div>
        <div className="w-full pb-8 text-center">
          <LinkButtonMini
            href="/terrace/"
            label="記録を完了する"
            variant="secondary"
          />
        </div>
      </section>
    </HatakeArea>
  );
}
