import { getDateParts } from "@/lib/utils/iso-date";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
import DiarySummary from "@/ui/diary/diary-summary";
import DiaryDetailList from "@/ui/diary/diary-detail-list";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { Pencil } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryById } from "@/lib/getDiary";
import { getTags } from "@/lib/getTags";

type Props = {
  params: {
    id: string;
  };
};

const tags = await fetchSafe(getTags);

export default async function Page({ params }: Props) {
  const { id } = await params;
  const diaryEntry = await fetchSafe(() => getDiaryById(id));
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
    <>
      <PageTitle
        title="日記を編集する"
        icon={<Pencil size={32} className="rotate-180" />}
      />
      <HatakeArea>
        <section
          data-layout="diary"
          className="app-blurred-bg-white m-auto mb-8 rounded-md border-2 border-white/80 p-4 xl:max-w-4/5"
        >
          <div className="py-4 text-center text-xl text-gray-700">
            <time dateTime={iso} className="font- font-bold">
              {month}月{day}日（{weekday}）
            </time>
          </div>
          <div
            data-role="diary-contents"
            className="m-auto flex w-full flex-col items-center justify-start gap-8 py-8 lg:max-w-9/10"
          >
            <DiarySummary
              titleValue={diaryEntry.title ?? ""}
              summaryValue={diaryEntry.summary ?? ""}
            />
            <LinkButtonMini
              href="/"
              label="写真を追加する"
              variant="secondary"
            />
            <div
              data-role="diary-content-details"
              className="mt-4 flex w-full flex-col items-center justify-start gap-8 border-t-1 border-b-1 border-dashed border-gray-400 px-4 py-8"
            >
              <h3 className="text-lg font-bold">詳細を編集する</h3>
              <DiaryDetailList
                initialDetails={diaryEntry.details}
                tags={
                  tags ?? {
                    cropName: [],
                    fieldName: [],
                    pesticideName: [],
                    concentration: [],
                    dilutionRate: [],
                  }
                }
              />
            </div>
          </div>
          <div className="w-full pb-8 text-center">
            <LinkButtonMini
              href="/terrace/"
              label="編集を完了する"
              variant="secondary"
            />
          </div>
        </section>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="diary" />
        <LinkButtonWithIcon href="cancel" editSuffixPath={id} />
      </BottomNav>
    </>
  );
}
