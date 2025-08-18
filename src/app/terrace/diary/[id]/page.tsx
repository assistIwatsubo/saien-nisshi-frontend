import HatakeArea from "@/ui/templates/hatake-area";
import DiaryCalendarDisplay from "@/ui/atoms/dairy-calendar-display";
import DiarySummary from "@/ui/diary/diary-summary";
import DiaryDetailList from "@/ui/diary/diary-detail-list";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryById } from "@/lib/getDiary";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";
import { getDateParts } from "@/lib/utils/iso-date";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const diaryEntry = await fetchSafe(() => getDiaryById(id));
  if (!diaryEntry) {
    return (
      <div className="py-8 text-center text-red-500">
        指定された記録が見つかりません。
      </div>
    );
  }

  const { year, month } = getDateParts(new Date(diaryEntry.date));

  return (
    <>
      <HatakeArea>
        <article
          data-layout="diary"
          className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 xl:max-w-4/5"
        >
          <div
            data-role="diary-contents"
            className="m-auto flex w-full flex-col items-center justify-start gap-8 py-8 lg:max-w-9/10"
          >
            <div className="flex w-full items-start justify-between gap-5 px-4">
              <DiaryCalendarDisplay iso={diaryEntry.date} />
              <div className="w-full">
                <DiarySummary
                  readonly
                  titleValue={diaryEntry.title}
                  summaryValue={diaryEntry.summary}
                />
              </div>
            </div>
            {diaryEntry.details && diaryEntry.details.length > 0 && (
              <div
                data-role="diary-content-details"
                className="mt-4 flex w-full flex-col items-center justify-start gap-8 border-t-1 border-b-1 border-dashed border-gray-400 px-4 py-8"
              >
                <h3 className="text-lg font-bold">詳細</h3>
                <DiaryDetailList readonly initialDetails={diaryEntry.details} />
              </div>
            )}
          </div>
        </article>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="diary" />
        <LinkButtonWithIcon href="diary" edit editSuffixPath={id} />
      </BottomNav>
      <LinkButtonCalendar year={year} month={month} />
    </>
  );
}
