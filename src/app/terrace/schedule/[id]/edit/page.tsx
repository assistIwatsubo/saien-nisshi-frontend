import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { Pencil } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getScheduleById } from "@/lib/getSchedule";
import { getFormattedDateTime } from "@/lib/utils/format-date";

type Props = {
  params: {
    id: string;
  };
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
          <div className="flex flex-col items-start justify-start gap-4 px-4">
            <label htmlFor="schedule-title">
              <input
                type="text"
                id="schedule-title"
                name="title"
                placeholder="予定のタイトルを入れてください"
                defaultValue={scheduleEntry.title ?? scheduleEntry.title}
              />
            </label>
            <p className="text-sm text-gray-600">
              <time dateTime={scheduleEntry.start}>
                {getFormattedDateTime(scheduleEntry.start)}
              </time>
              {scheduleEntry.end && (
                <>
                  <span className="mx-1">～</span>
                  <time dateTime={scheduleEntry.end}>
                    {getFormattedDateTime(scheduleEntry.end)}
                  </time>
                </>
              )}
            </p>
            {scheduleEntry.memo && (
              <p className="mb-2 w-full rounded-sm bg-white/50 px-2 py-1 text-left text-gray-700">
                {scheduleEntry.memo}
              </p>
            )}
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
        <LinkButtonWithIcon href="schedule" />
        <LinkButtonWithIcon href="schedule" cancel editSuffixPath={id} />
      </BottomNav>
    </>
  );
}
