import { getDateParts } from "@/lib/utils/format-date";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
import DiarySummary from "@/ui/diary/diary-summary";
import DiaryDetailList from "@/ui/molecules/forms/diary/diary-detail-list";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { PencilLine } from "lucide-react";
import { Pencil } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiaryByDate } from "@/lib/getDiary";
import { getTags } from "@/lib/getTags";

const tags = await fetchSafe(() => getTags());

const { iso, month, day, weekday } = getDateParts(new Date());
const diary = await fetchSafe(() => getDiaryByDate(iso));

export default async function Page() {
  return (
    <>
      <PageTitle
        title={`今日の日誌を${diary ? "編集する" : "記録する"}`}
        icon={
          diary ? (
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
            <time dateTime={iso} className="font- font-bold">
              {month}月{day}日（{weekday}）
            </time>
          </div>
          <div
            data-role="diary-contents"
            className="m-auto flex w-full flex-col items-center justify-start gap-8 py-8 lg:max-w-9/10"
          >
            <DiarySummary
              titleValue={diary?.title ?? ""}
              summaryValue={diary?.summary ?? ""}
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
              <h3 className="text-lg font-bold">詳細を記録する</h3>
              <DiaryDetailList
                initialDetails={diary?.details ?? []}
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
              label="記録を完了する"
              variant="secondary"
            />
          </div>
        </section>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="diary" />
      </BottomNav>
    </>
  );
}
