import Link from "next/link";
import HomeNews from "@/ui/terrace/home-news";
import DateDisplay from "@/ui/atoms/dairy-calendar-display";
import ScheduleBoard from "@/ui/terrace/scheduleBoard";
import EngawaArea from "@/ui/templates/engawa-area";
import TitleH3 from "@/ui/atoms/title-h3";
import SectionH3 from "@/ui/molecules/section-h3";
import FollowingDiaryList from "@/ui/organisms/following-diary-list";
import LinkButtonLarge from "@/ui/atoms/link-button-large";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import HatakeArea from "@/ui/templates/hatake-area";
// import HomeCharacter from "@/ui/molecules/home-character";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getNewsLatest } from "@/lib/getNews";
import { getFollowingsWithDiaries } from "@/lib/getUserData";
import { getScheduleList } from "@/lib/getSchedule";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import EngawaText from "@/ui/molecules/engawa-text";
import LinkButtonCalendar from "@/ui/atoms/link-button-calendar";
import PageTitle from "@/ui/molecules/page-title";
import { HousePlus } from "lucide-react";
import HelpNavigation from "@/ui/organisms/help-navigation";
import Logout from "@/ui/molecules/logout";
import { getDiaryOfToday } from "@/lib/getDiary";

export default async function Page() {
  const [latestNews, schedules, followingDiaries, diaryInfo] =
    await Promise.all([
      fetchSafe(getNewsLatest),
      fetchSafe(getScheduleList),
      fetchSafe(() => getFollowingsWithDiaries(3)),
      fetchSafe(getDiaryOfToday),
    ]);

  const hasDiary = !!diaryInfo;

  return (
    <>
      <PageTitle title="縁側" icon={<HousePlus size={32} />} />
      <HatakeArea>
        <HomeNews latestNews={latestNews} />
        <div className="flex items-stretch justify-between gap-8">
          <DateDisplay />
          <ScheduleBoard schedules={schedules} />
        </div>
        {/* <HomeCharacter homeState="default" /> */}
        <div className="absolute right-0 bottom-0 left-0 w-full py-8 text-center">
          <nav className="flex items-start justify-center gap-8 p-4">
            <LinkButtonWithIcon
              variant="editor"
              type="diary"
              mode={hasDiary ? "edit" : "create"}
            />
            <LinkButtonWithIcon variant="archive" />
            <LinkButtonWithIcon variant="plan" />
          </nav>
        </div>
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
        {followingDiaries && followingDiaries.length > 0 ? (
          <SectionH3>
            <TitleH3
              id="text-area-title"
              label="あなたがフォローしている人の投稿"
              type="withLine"
              color="primary"
              iconType="star"
            />
            <FollowingDiaryList followingDiaries={followingDiaries} />
            <div className="container m-auto flex items-center justify-center pt-4">
              <LinkButtonMini
                href="/following/diary"
                variant="base"
                label="もっと見る"
              />
            </div>
          </SectionH3>
        ) : null}
        <nav
          aria-label="設定項目のナビゲーション"
          className="container flex flex-col items-center gap-8 py-8"
        >
          <LinkButtonLarge label="マイページへ" href="/terrace/mypage" />
          <LinkButtonLarge label="マイ設定へ" href="/terrace/settings" />
          <Logout />
        </nav>
      </EngawaArea>
      <HelpNavigation />
      <LinkButtonCalendar />
    </>
  );
}
