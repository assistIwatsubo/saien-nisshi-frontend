import { BookOpenText } from "lucide-react";
import PageTitle from "@/ui/molecules/page-title";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";

export default async function Page() {
  return (
    <>
      <PageTitle title="日誌一覧" icon={<BookOpenText size={32} />} />

      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
        <LinkButtonWithIcon variant="editor" mode="create" type="diary" />
      </BottomNav>
      <LinkButtonCalendar />
    </>
  );
}
