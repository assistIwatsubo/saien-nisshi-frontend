import HatakeArea from "@/ui/templates/hatake-area";
import DiaryCalendarDisplay from "@/ui/atoms/dairy-calendar-display";
import DiarySummary from "@/ui/diary/diary-summary";
import DiaryDetailList from "@/ui/diary/diary-detail-list";
import { diaryEntries } from "@/mocks/diary";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import { Tag } from "@/ui/atoms/tag";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const diaryEntry = diaryEntries.find((entry) => entry.id === id);

  if (!diaryEntry) {
    // 適宜 404 を表示させたい場合はここで return
    return (
      <div className="py-8 text-center text-red-500">
        指定された記録が見つかりません。
      </div>
    );
  }
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
                {diaryEntry.tags && (
                  <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-2 border-t border-[var(--app-border-gray)] px-2 pt-4">
                    {diaryEntry.tags.map((tag, i) => (
                      <Tag key={i} label={tag} as="span" />
                    ))}
                  </div>
                )}
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
        <LinkButtonWithIcon href="edit" editSuffixPath={id} />
      </BottomNav>
    </>
  );
}
