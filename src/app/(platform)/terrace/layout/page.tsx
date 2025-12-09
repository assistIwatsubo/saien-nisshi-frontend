import HatakeArea from "@/ui/templates/hatake-area";
import PageTitle from "@/ui/molecules/page-title";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { FilePen } from "lucide-react";
import FieldLayout from "@/ui/molecules/field-layout";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getFields, getLayouts } from "@/lib/getUserSettings";

export default async function Page() {
  const fields = await fetchSafe(getFields);
  const layouts = await fetchSafe(getLayouts);
  return (
    <>
      <PageTitle title="作付図" icon={<FilePen size={32} />} />
      <HatakeArea>
        <FieldLayout fields={fields} layouts={layouts} />
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
        <LinkButtonWithIcon variant="layout" mode="edit" />
      </BottomNav>
    </>
  );
}
