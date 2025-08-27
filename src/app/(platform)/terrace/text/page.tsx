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

const diaries = await fetchSafe(getDiaryList);

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
            <Link href={`/terrace/day/${entry.date}`}>
              <div className="flex items-start justify-between gap-5">
                <DiaryCalendarDisplay iso={entry.date} />
                <div className="w-full">
                  <DiarySummary
                    readonly
                    titleValue={entry.title}
                    summaryValue={entry.summary}
                  />
                  {/* ここからタグ表示部分 */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.details?.flatMap((detail) => {
                      const tags = [];
                      // 作物名・圃場名・薬剤名をfieldsから取り出す
                      if (detail.fields.cropName) {
                        tags.push(
                          <Tag
                            key={`${detail.id}-cropName`}
                            label={detail.fields.cropName}
                            type={detail.type} // ここにdetail.typeを渡す
                          />,
                        );
                      }
                      if (detail.fields.fieldName) {
                        tags.push(
                          <Tag
                            key={`${detail.id}-fieldName`}
                            label={detail.fields.fieldName}
                            type={detail.type}
                          />,
                        );
                      }
                      if (
                        detail.type === "pesticide" &&
                        detail.fields.pesticideName
                      ) {
                        tags.push(
                          <Tag
                            key={`${detail.id}-pesticideName`}
                            label={detail.fields.pesticideName}
                            type={detail.type}
                          />,
                        );
                      }
                      return tags;
                    })}
                  </div>
                  {/* ここまで */}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="today" />
      </BottomNav>
      <LinkButtonCalendar />
    </>
  );
}
