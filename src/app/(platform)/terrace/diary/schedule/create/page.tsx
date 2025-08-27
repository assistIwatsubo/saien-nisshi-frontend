import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { CalendarPlus } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import { getDateParts } from "@/lib/utils/format-date";

export default async function Page() {
  const { iso } = getDateParts(new Date());

  return (
    <>
      <PageTitle title="予定を追加する" icon={<CalendarPlus size={32} />} />
      <HatakeArea>
        <section
          data-layout="schedule"
          className="app-blurred-bg-ivory m-auto mb-8 rounded-md border-2 border-[var(--app-base-color)]/80 p-4 xl:max-w-4/5"
        >
          <div className="flex flex-col items-start justify-start gap-4 px-4 pb-4">
            <label htmlFor="schedule-title" className="w-full text-gray-600">
              <input
                type="text"
                id="schedule-title"
                name="title"
                placeholder="予定のタイトルを入れてください"
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
                required
              />
            </label>
            <label htmlFor="start_date">
              開始日
              <input
                id="start-date"
                type="datetime-local"
                className="ml-4 rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
                placeholder={iso}
                defaultValue={iso}
                required
              />
            </label>
            <label htmlFor="end_date">
              終了日
              <input
                id="end-date"
                type="datetime-local"
                className="ml-4 rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
                placeholder="予定のタイトルを入れてください"
              />
            </label>
            <label htmlFor="memo" className="w-full">
              メモ
              <textarea
                id="memo"
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
                placeholder="メモしておきたいことがあればここに記入できます"
              ></textarea>
            </label>
          </div>

          <div className="w-full py-4 text-center">
            <LinkButtonMini
              href="/terrace/schedule"
              label="予定を追加する"
              variant="secondary"
            />
          </div>
        </section>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
      </BottomNav>
    </>
  );
}
