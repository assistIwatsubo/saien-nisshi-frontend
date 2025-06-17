import Link from "next/link";
import { appTitle, comment } from "@/lib/fonts";
import DiaryAreaTitle from "@/ui/atoms/diary-area-title";
import DecorationArch from "@/ui/atoms/decoration-arch";
import HomeNews from "@/ui/molecules/home-news";

export default function Page() {
  return (
    <>
      <section
        data-role="diary-check-section"
        className="relative min-h-[50vh] p-4"
        aria-labelledby="diary-area-title"
      >
        <DiaryAreaTitle />
        <HomeNews />
        <section aria-labelledby="schedule-area-title">
          <h3>今日の予定</h3>
          <ul>
            <li>
              <Link href="/schedules/edit?id=123">
                <p>1</p>
                <p>
                  エダマメ定植
                  <span>
                    <time dateTime="2025-06-17">6月17日</time>～
                    <time dateTime="2025-06-18">6月18日</time>
                  </span>
                </p>
                <span>確認</span>
              </Link>
            </li>
          </ul>
        </section>
      </section>
      <div
        data-role="section-wrapper"
        className="relative h-auto w-full translate-y-32"
      >
        <DecorationArch />
        <section
          data-role="system-section"
          className="bg-[var(--app-base-color)] px-[4%] pt-4 pb-32 lg:px-[20%]"
          aria-labelledby="non-diary-area-title"
        >
          <h2
            className={`${appTitle.className} py-4 text-center text-[var(--app-primary-color)]`}
            id="non-diary-area-title"
          >
            ひとやすみ
          </h2>
          <section className="py-4" aria-labelledby="text-area-title">
            <h3 id="text-area-title">教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section className="py-4">
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section className="py-4">
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section className="py-4">
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section className="py-4">
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section className="py-4">
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
        </section>
      </div>
    </>
  );
}
