import HatakeArea from "@/ui/templates/hatake-area";
import { ListTodo } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getScheduleList } from "@/lib/getSchedule";
import ScheduleDisplay from "@/ui/atoms/schedule-display";

const schedules = await fetchSafe(getScheduleList);

export default async function Page() {
  return (
    <>
      <PageTitle title="予定一覧" icon={<ListTodo size={32} />} />
      <HatakeArea>
        <ul className="flex flex-grow flex-col items-center justify-start gap-8 pb-6">
          {schedules?.map((entry) => (
            <li key={entry.id} className="w-full">
              <ScheduleDisplay entry={entry} variant="detailed" />
            </li>
          ))}
        </ul>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
      </BottomNav>
      <LinkButtonCalendar />
    </>
  );
}
