import HatakeArea from "@/ui/templates/hatake-area";
import DiaryCalendarDisplay from "@/ui/atoms/dairy-calendar-display";
import DiarySummary from "@/ui/diary/diary-summary";
import Link from "next/link";
import { Tag } from "@/ui/atoms/tag";
import { BookOpenText } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiary } from "@/lib/getDiary";

const [diaries] = await Promise.all([fetchSafe(getDiary)]);

export default async function Page() {
  return (
    <>
      <PageTitle title="日誌一覧" icon={<BookOpenText size={32} />} />
      <HatakeArea>
        {diaries?.map((entry) => (
          <article
            key={entry.id}
            data-layout="diary"
            className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 lg:max-w-4/5"
          >
            <Link href={`/terrace/diary/${entry.id}`}>
              <div className="flex items-start justify-between gap-5">
                <DiaryCalendarDisplay iso={entry.date} />
                <div className="w-full">
                  <DiarySummary
                    readonly
                    titleValue={entry.title}
                    summaryValue={entry.summary}
                  />
                  {entry.tags && (
                    <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-2 border-t border-[var(--app-border-gray)] px-2 pt-4">
                      {entry.tags.map((tag, i) => (
                        <Tag key={i} label={tag} as="span" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="today" />
        <LinkButtonWithIcon href="schedule" />
      </BottomNav>
      <LinkButtonCalendar />
    </>
  );
}
