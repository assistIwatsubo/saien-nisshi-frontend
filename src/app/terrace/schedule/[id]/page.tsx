import HatakeArea from "@/ui/templates/hatake-area";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getScheduleById } from "@/lib/getSchedule";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";
import PageTitle from "@/ui/molecules/page-title";
import { Pencil } from "lucide-react";
import ScheduleDisplay from "@/ui/atoms/schedule-display";

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
        title="個別の予定の確認"
        icon={<Pencil size={32} className="rotate-180" />}
      />
      <HatakeArea>
        <article data-layout="schedule">
          <ScheduleDisplay entry={scheduleEntry} variant="detailed" />
        </article>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
        <LinkButtonWithIcon href="schedule" />
      </BottomNav>
      <LinkButtonCalendar />
    </>
  );
}
