import HatakeArea from "@/ui/templates/hatake-area";
import DiaryCalendarDisplay from "@/ui/atoms/dairy-calendar-display";
import DiarySummary from "@/ui/diary/diary-summary";
import DiaryDetailList from "@/ui/diary/diary-detail-list";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryByDate } from "@/lib/getDiary";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";
import { getDateParts } from "@/lib/utils/iso-date";
import ScheduleDisplay from "@/ui/atoms/schedule-display";
import { getScheduleByDate } from "@/lib/getSchedule";
import PageTitle from "@/ui/molecules/page-title";
import { CalendarSearch } from "lucide-react";

type Props = {
  params: {
    date: string;
  };
};

export default async function Page({ params }: Props) {
  const { date } = params;
  const diaryEntry = await fetchSafe(() => getDiaryByDate(date));
  const scheduleEntry = await fetchSafe(() => getScheduleByDate(date));

  if (!diaryEntry && (!scheduleEntry || scheduleEntry.length === 0)) {
    return (
      <div className="py-8 text-center text-red-500">
        指定された記録が見つかりません。
      </div>
    );
  }

  // diaryEntry がある場合のみ日付を参照
  const { year, month, day } = getDateParts(new Date(date));

  return (
    <>
      {!diaryEntry && scheduleEntry && scheduleEntry.length > 0 && (
        <PageTitle
          title={`${month}月${day}日の予定`}
          icon={<CalendarSearch size={32} />}
        />
      )}
      <HatakeArea>
        {diaryEntry && (
          <article
            data-layout="diary"
            className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 xl:max-w-4/5"
          >
            <div
              data-role="diary-contents"
              className="m-auto flex w-full flex-col items-center justify-start gap-4 py-4 lg:max-w-9/10"
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
                  className="flex w-full flex-col items-center justify-start gap-8 border-t-1 border-b-1 border-dashed border-gray-400 px-4 py-8"
                >
                  <h3 className="text-lg font-bold">詳細</h3>
                  <DiaryDetailList
                    readonly
                    initialDetails={diaryEntry.details}
                  />
                </div>
              )}
            </div>
          </article>
        )}

        {scheduleEntry && scheduleEntry.length > 0 && (
          <section data-layout="schedule" className="flex flex-col gap-6 pb-6">
            {scheduleEntry.map((entry) => (
              <ScheduleDisplay
                key={entry.id}
                entry={entry}
                variant="detailed"
              />
            ))}
          </section>
        )}
      </HatakeArea>

      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="diary" />
        {diaryEntry && (
          <LinkButtonWithIcon
            href="diary"
            edit
            editSuffixPath={diaryEntry.id}
          />
        )}
      </BottomNav>
      <LinkButtonCalendar year={year} month={month} />
    </>
  );
}
