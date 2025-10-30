import HatakeArea from "@/ui/templates/hatake-area";
import PageTitle from "@/ui/molecules/page-title";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { FilePenLine } from "lucide-react";
import PlantingPlan from "@/ui/molecules/planting-plan";

export default async function Page() {
  return (
    <>
      <PageTitle title="作付計画表を編集" icon={<FilePenLine size={32} />} />
      <HatakeArea>
        <article data-layout="plan">
          <nav>
            <ol>
              <li>
                <h3 className="app-blurred-bg-white w-fit rounded-t-lg px-4 py-1 text-xl font-bold">
                  2025年
                </h3>
              </li>
            </ol>
          </nav>
          <PlantingPlan edit />
        </article>
      </HatakeArea>
      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
        <LinkButtonWithIcon variant="plan" mode="cancel" />
      </BottomNav>
    </>
  );
}
