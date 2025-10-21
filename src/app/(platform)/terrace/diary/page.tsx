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
import { Tag } from "@/ui/atoms/tag"; // Tagコンポーネントのimport
import ScheduleSummary from "@/ui/atoms/schedule-summary";
import { diaryInfo } from "@/lib/utils/diaryInfo";
import JumpNav from "@/ui/atoms/JumpNav";

export default async function Page() {
  const diaries = await fetchSafe(getDiaryList);
  const { hasDiary, date } = await diaryInfo();

  // 事前に月ごとの最初の記事IDをマップ化
  const monthFirstEntryMap = new Map<string, string>(); // key: 'YYYY-MM', value: entry.id
  diaries?.forEach((entry) => {
    const ym = entry.date.slice(0, 7); // 'YYYY-MM'
    if (!monthFirstEntryMap.has(ym)) {
      monthFirstEntryMap.set(ym, entry.id); // 月の最初の記事を保存
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
            key={entry.id}
            data-layout="diary"
            className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 lg:max-w-4/5"
            id={entry.id}
          >
            <Link href={`/terrace/diary/${entry.date}?id=${entry.id}`}>
              <div className="flex items-start justify-between gap-5">
                <DiaryCalendarDisplay iso={entry.date} />
                <div className="w-full">
                  <DiarySummary
                    titleValue={entry.title ?? ""}
                    summaryValue={entry.summary ?? ""}
                    clamped
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.diary_details
                      ?.filter(
                        (item): item is NonNullable<typeof item> =>
                          !!item ,
                      )
                      .map((item) => (
                        <div key={item.id} className="mx-1">
                          {item.type === "pesticide" && (
                          <Tag
                              label={`${item.diary_detail_pesticide?.crop_name}：${item.diary_detail_pesticide?.pesticide_name}`}
                              type={item.type}
                            />
                          )}
                          {item.type === "crop" && (
                            <Tag
                              label={`${item.diary_detail_crop?.crop_name}：${item.diary_detail_crop?.field_name}`}
                              type={item.type}
                            />
                          )}
                          {item.type === "other" && (
                            <Tag
                              label={`その他：${item.memo?.slice(0, 6)}…`}
                              type={item.type}
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
