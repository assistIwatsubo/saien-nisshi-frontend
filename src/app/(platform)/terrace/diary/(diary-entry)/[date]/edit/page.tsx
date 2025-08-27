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
  params: {
    date: string;
  };
};

export default async function Page({ params }: Props) {
  const { date } = params;

  // データ取得
  const diaryEntry = await fetchSafe(() => getDiaryByDate(date));
  const tags = await fetchSafe(getTags);

  const { iso, month, day, weekday } = getDateParts(new Date(date));

  return (
    <>
      <PageTitle
        title={diaryEntry ? "記録を編集する" : "記録を追加する"}
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

          <FormDiary
            diaryId={diaryEntry?.id ?? "0"}
            initialTitle={diaryEntry?.title}
            initialSummary={diaryEntry?.summary}
            initialDetails={diaryEntry?.details}
            tags={tags ?? {}}
          />
        </section>
      </HatakeArea>

      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="diary" />
        <LinkButtonWithIcon href="diary" cancel editSuffixPath={date} />
      </BottomNav>
    </>
  );
}
