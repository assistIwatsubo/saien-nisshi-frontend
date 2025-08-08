import Link from "next/link";
import HomeNews from "@/ui/terrace/home-news";
import DateDisplay from "@/ui/atoms/dairy-calendar-display";
import HomeSkedules from "@/ui/terrace/home-schedule";
import EngawaArea from "@/ui/templates/engawa-area";
import TitleH3 from "@/ui/atoms/title-h3";
import SectionH3 from "@/ui/molecules/section-h3";
import CommunityDiaryList from "@/ui/organisms/community-diray-list";
import LinkButtonLarge from "@/ui/atoms/link-button-large";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
// import HomeCharacter from "@/ui/molecules/home-character";
import { getNews } from "@/lib/getNews";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getCommunityDiary } from "@/lib/getCommunityDiary";
import { getSchedule } from "@/lib/getSchedule";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import EngawaText from "@/ui/molecules/engawa-text";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";

export default async function Page() {
  const [latestNews, schedules, communityDiaries] = await Promise.all([
    fetchSafe(getNews),
    fetchSafe(getSchedule),
    fetchSafe(getCommunityDiary),
  ]);

  return (
    <>
      <HatakeArea>
        <HomeNews latestNews={latestNews} />
        <div className="flex items-center justify-between gap-8">
          <DateDisplay />
          <div className="w-full">
            <HomeSkedules schedules={schedules} />
          </div>
        </div>
        {/* <HomeCharacter homeState="default" /> */}
        <nav className="absolute right-0 bottom-0 left-0 w-full py-8 text-center">
          <nav className="flex items-stretch justify-between p-4 md:justify-center md:gap-12">
            <LinkButtonWithIcon href="today" />
            <LinkButtonWithIcon href="diary" />
            <LinkButtonWithIcon href="schedule" />
          </nav>
        </nav>
      </HatakeArea>
      <EngawaArea title="休憩メニュー">
        <EngawaText textName={["edamame", "ingen"]} />
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="お役立ち情報"
            type="withLine"
            color="primary"
            iconType="lightbulb"
          />
          <ul className="py-2">
            <li>
              <Link
                href="/text/edamame"
                className="block w-full rounded-md border-2 border-[var(--app-primary-color)] bg-white px-4 py-3"
              >
                スライダー作る
              </Link>
            </li>
          </ul>
        </SectionH3>
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="あなたがフォローしている人の投稿"
            type="withLine"
            color="primary"
            iconType="star"
          />
          <CommunityDiaryList communityDiary={communityDiaries} />
          <div className="container m-auto flex items-center justify-center pt-4">
            <LinkButtonMini
              href="/following/diary"
              variant="base"
              label="もっと見る"
            />
          </div>
        </SectionH3>
        <nav
          aria-label="設定項目のナビゲーション"
          className="container flex flex-col items-center gap-8 py-8"
        >
          <LinkButtonLarge label="マイページへ" href="/mypage" />
          <LinkButtonLarge label="マイ設定へ" href="/setting" />
        </nav>
      </EngawaArea>
      <LinkButtonCalendar />
    </>
  );
}
