import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { Pencil } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getScheduleById } from "@/lib/getSchedule";
import { getDatetimeLocalString } from "@/lib/utils/format-date";
import { getDateParts, getISODate } from "@/lib/utils/format-date";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const scheduleEntry = await fetchSafe(() => getScheduleById(id));
  if (!scheduleEntry) {
    return (
      <div className="py-8 text-center text-red-500">
        指定された記録が見つかりません。
      </div>
    );
  }
  const { iso, year, month, day } = getDateParts(
    new Date(scheduleEntry.created_at),
  );

  const updatedDateParts = scheduleEntry.updated_at
    ? getDateParts(new Date(scheduleEntry.updated_at!))
    : undefined;

  return (
    <>
      <PageTitle
        title="予定を編集する"
        icon={<Pencil size={32} className="rotate-180" />}
      />
      <HatakeArea>
        <section
          data-layout="schedule"
          className="app-blurred-bg-ivory m-auto mb-8 rounded-md border-2 border-[var(--app-base-color)]/80 p-4 xl:max-w-4/5"
        >
          <div className="flex flex-col items-start justify-start gap-4 px-4 pb-4">
            <label htmlFor="schedule-title" className="w-full">
              <input
                type="text"
                id="schedule-title"
                name="title"
                placeholder="予定のタイトルを入れてください"
                defaultValue={scheduleEntry.title ?? scheduleEntry.title}
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
              />
            </label>
            <p className="text-sm text-gray-600">
              <input
                type="datetime-local"
                className="rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
                defaultValue={getDatetimeLocalString(scheduleEntry.start)}
              />
              {scheduleEntry.end && (
                <>
                  <span className="mx-1">～</span>
                  <input
                    type="datetime-local"
                    className="rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
                    defaultValue={
                      scheduleEntry.end &&
                      getDatetimeLocalString(scheduleEntry.end)
                    }
                  />
                </>
              )}
            </p>

            {scheduleEntry.memo && (
              <textarea
                className="w-full rounded-sm border-2 border-[var(--app-border-gray)] bg-white/25 px-2 py-1"
                defaultValue={scheduleEntry.memo}
                rows={5}
              ></textarea>
            )}
          </div>
          <p className="w-full px-4 text-right text-xs text-gray-600">
            作成日：
            <time dateTime={iso}>
              {year}年{month}月{day}日
            </time>
          </p>
          {updatedDateParts && (
            <p className="w-full px-4 text-right text-xs text-gray-600">
              最終更新日：
              <time dateTime={updatedDateParts.iso}>
                {updatedDateParts.year}年{updatedDateParts.month}月
                {updatedDateParts.day}日
              </time>
            </p>
          )}
          <div className="w-full py-4 text-center">
            <LinkButtonMini
              href="/terrace/"
              label="編集を完了する"
              variant="secondary"
            />
          </div>
        </section>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
        <LinkButtonWithIcon variant="archive" />
        <LinkButtonWithIcon
          variant="archive"
          mode="cancel"
          type="schedule"
          editSuffixPath={getISODate(new Date(scheduleEntry.start))}
        />
      </BottomNav>
    </>
  );
}
