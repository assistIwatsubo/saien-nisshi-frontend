import { getDateParts } from "@/lib/utils/format-date";
import HatakeArea from "@/ui/templates/hatake-area";
import FormDiary from "@/ui/molecules/forms/form-diary";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { Pencil, PencilLine } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryByDate } from "@/lib/getDiary";
import { getTags } from "@/lib/getTags";

type Props = {
  params: Promise<{
    date: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { date } = await params;

  // データ取得
  const diaryEntries = await fetchSafe(() => getDiaryByDate(date));
  const diaryEntry = diaryEntries?.[0] ?? null;
  const tags = await fetchSafe(getTags);

  const { iso, month, day, weekday } = getDateParts(new Date(date));

  return (
    <>
      <PageTitle
        title={diaryEntry ? "日誌を編集" : "日誌を書く"}
        icon={
          diaryEntry ? (
            <Pencil size={32} className="rotate-180" />
          ) : (
            <PencilLine size={32} />
          )
        }
      />

      <HatakeArea>
        <section
          data-layout="diary"
          className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 xl:max-w-4/5"
        >
          <div className="py-4 text-center text-xl text-gray-700">
            <time dateTime={iso} className="font-bold">
              {month}月{day}日（{weekday}）
            </time>
          </div>

          <FormDiary initialData={diaryEntry ?? undefined} tags={tags ?? {}} />
        </section>
      </HatakeArea>

      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
        <LinkButtonWithIcon variant="archive" />
        <LinkButtonWithIcon
          variant="editor"
          type="diary"
          mode="cancel"
          editSuffixPath={date}
        />
      </BottomNav>
    </>
  );
}
