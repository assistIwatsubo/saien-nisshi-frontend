import Link from "next/link";
import Image from "next/image";
import TitleDairySection from "@/ui/atoms/title-diary-section";
import HomeNews from "@/ui/molecules/home-news";
import HomeSkedules from "@/ui/molecules/home-schedule";
import HomeMenu from "@/ui/organisms/carousel-menu";
import NonDiaryArea from "@/ui/templates/non-daiary-area";
import TitleH3 from "@/ui/atoms/title-h3";
import SectionH3 from "@/ui/molecules/section-h3";
import CommunityDiaryList from "@/ui/organisms/community-diray-list";
import LinkButtonLarge from "@/ui/atoms/link-button-large";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import DiaryArea from "@/ui/templates/daiary-area";
import HomeCharacter from "@/ui/molecules/home-character";
import { getNews } from "@/lib/getNews";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getDiary } from "@/lib/getDiary";
import { getCommunityDiary } from "@/lib/getCommunityDiary";

import Diaries from "@/ui/molecules/diaries";
import Accountings from "@/ui/molecules/accountings";
import Attendances from "@/ui/molecules/attendances";

export default async function Page() {
  const [latestNews, diaries, communityDiaries] = await Promise.all([
    fetchSafe(getNews),
    fetchSafe(getDiary),
    fetchSafe(getCommunityDiary),
  ]);

  return (
    <>
      <DiaryArea>
        <HomeNews latestNews={latestNews} />
        <HomeCharacter homeState="default" />
        <TitleDairySection />
        <Image src="/images/engawa.png" alt="" width={500} height="500" />
        <HomeSkedules />
        <HomeMenu
          views={[
            {
              label: "直近の日誌一覧",
              colorClass: "bg-[var(--app-secondary-color)]",
              content: <Diaries entries={diaries} />,
            },
            {
              label: "出納帳",
              colorClass: "bg-[var(--app-accounting-color)]",
              content: <Accountings entries={diaries} />,
            },
            {
              label: "出退勤一覧",
              colorClass: "bg-[var(--app-another-color)]",
              content: <Attendances entries={diaries} />,
            },
          ]}
        />
      </DiaryArea>
      <NonDiaryArea title="えんがわ日和">
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="教科書を読む"
            type="withLine"
            color="primary"
            iconType="library"
          />
          <ul className="py-2">
            <li>
              <Link
                href="/text/edamame"
                className="block w-full rounded-md border-2 border-[var(--app-primary-color)] bg-white px-4 py-3"
              >
                エダマメの教科書
              </Link>
            </li>
          </ul>
        </SectionH3>
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
      </NonDiaryArea>
    </>
  );
}
