import HatakeArea from "@/ui/templates/hatake-area";
import DiaryCalendarDisplay from "@/ui/atoms/dairy-calendar-display";
import DiarySummary from "@/ui/diary/diary-summary";
import Link from "next/link";
import { BookOpenText } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryList } from "@/lib/getDiary";
import { Tag } from "@/ui/atoms/tag";
import ScheduleSummary from "@/ui/atoms/schedule-summary";
import { diaryInfo } from "@/lib/utils/diaryInfo";
import JumpNav from "@/ui/atoms/JumpNav";

export default async function Page() {
  const diaries = await fetchSafe(getDiaryList);

  if (!diaries) return;

  console.log(diaries);

  const { hasDiary, date } = await diaryInfo();

  // 事前に月ごとの最初の記事IDをマップ化
  const monthFirstEntryMap = new Map<string, string>(); // key: 'YYYY-MM', value: entry.id
  diaries?.forEach((entry) => {
    const ym = entry.date.slice(0, 7); // 'YYYY-MM'
    if (!monthFirstEntryMap.has(ym)) {
      monthFirstEntryMap.set(ym, entry.diaryId.toString()); // 月の最初の記事を保存
    }
  });

  // 月リスト（重複なし）
  const uniqueMonths = Array.from(monthFirstEntryMap.keys());
  return (
    <>
      <PageTitle title="日誌一覧" icon={<BookOpenText size={32} />} />

      <JumpNav
        items={uniqueMonths.map((ym) => ({
          id: monthFirstEntryMap.get(ym)!,
          label: ym.split("-")[1] + "月",
        }))}
      />
      <HatakeArea>
        {diaries?.map((entry) => (
          <article
            key={entry.diaryId}
            data-layout="diary"
            className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 lg:max-w-4/5"
            id={entry.diaryId.toString()}
          >
            <Link href={`/terrace/diary/${entry.date}?id=${entry.diaryId}`}>
              <div className="flex items-start justify-between gap-5">
                <DiaryCalendarDisplay iso={entry.date} />
                <div className="w-full">
                  <DiarySummary
                    titleValue={entry.title ?? ""}
                    summaryValue={entry.summary ?? ""}
                    clamped
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.details
                      ?.filter(
                        (detail): detail is NonNullable<typeof detail> =>
                          !!detail,
                      )
                      .map((detail) => (
                        <div key={detail.detailId} className="mx-1">
                          {detail.type === "pesticide" && (
                            <Tag
                              label={`${detail.cropName}：${detail.pesticide?.pesticideName}`}
                              type={detail.type}
                            />
                          )}
                          {detail.type === "crop" && (
                            <Tag
                              label={`${detail.cropName}：${detail.fieldName}`}
                              type={detail.type}
                            />
                          )}
                          {detail.type === "other" && (
                            <Tag
                              label={`その他：${detail.memo?.slice(0, 6)}…`}
                              type={detail.type}
                            />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {entry.schedules && (
                <ScheduleSummary scheduleEntries={entry.schedules} />
              )}
            </Link>
          </article>
        ))}
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
        <LinkButtonWithIcon
          variant="editor"
          type="diary"
          mode={hasDiary ? "edit" : "create"}
          editSuffixPath={date}
        />
      </BottomNav>
      <LinkButtonCalendar />
    </>
  );
}
