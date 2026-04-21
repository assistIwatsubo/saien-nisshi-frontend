import Link from "next/link";
import HomeNews from "@/ui/terrace/home-news";
// import DateDisplay from "@/ui/atoms/dairy-calendar-display";
// import ScheduleBoard from "@/ui/terrace/scheduleBoard";
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
import { getLayouts, getPlans } from "@/lib/getUserSettings";
import { getFields } from "@/lib/getUserSettings";
import EngawaText from "@/ui/molecules/engawa-text";
import MainArea from "@/ui/templates/main-area";
import HelpNavigation from "@/ui/organisms/help-navigation";
import Logout from "@/ui/molecules/logout";
import { getDiaryList } from "@/lib/getDiary";

export default async function Page() {
  const [
    latestNews,
    schedules,
    followingDiaries,
    diaryEntries,
    fields,
    layouts,
    plans,
  ] = await Promise.all([
    fetchSafe(getNewsLatest),
    fetchSafe(getScheduleList),
    fetchSafe(() => getFollowingsWithDiaries(3)),
    fetchSafe(getDiaryList),
    fetchSafe(getFields),
    fetchSafe(getLayouts),
    fetchSafe(getPlans),
  ]);
  return (
    <>
      <HatakeArea>
        {/*
        <div className="flex items-stretch justify-between gap-8">
          <DateDisplay />
          <ScheduleBoard schedules={schedules} />
        </div> */}

        <MainArea
          diaryEntries={diaryEntries}
          scheduleEntries={schedules}
          fields={fields}
          layouts={layouts}
          plans={plans}
        />

        {/* <HomeCharacter homeState="default" /> */}
      </HatakeArea>
      <EngawaArea title="ひとやすみ">
        <HomeNews latestNews={latestNews} />
        <div className="flex gap-4 py-8">
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
        </div>
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
    </>
  );
}
