import Link from "next/link";
import { appTitle, comment } from "@/lib/fonts";
import DiarySectionTitle from "@/ui/atoms/diary-section-title";
import DecorationArch from "@/ui/atoms/decoration-arch";
import HomeNews from "@/ui/molecules/home-news";
import HomeSkedules from "@/ui/molecules/home-skedules";
import HomeMenu from "@/ui/organisms/home-menu";

export default function Page() {
  return (
    <>
      <section
        data-role="diary-check-section"
        className="relative container m-auto p-4 md:max-w-[80vw]"
        aria-labelledby="diary-section-title"
      >
        <DiarySectionTitle />
        <HomeNews />
        <HomeSkedules />
        <HomeMenu />
      </section>
      <div
        data-role="section-wrapper"
        className="relative h-auto w-full translate-y-32"
      >
        <DecorationArch />
        <section
          data-role="system-section"
          className="bg-[var(--app-base-color)] pt-4 pb-32"
          aria-labelledby="non-diary-area-title"
        >
          <div
            data-role="system-section__inner"
            className="container m-auto p-4 lg:max-w-[80vw]"
          >
            <h2
              className={`${appTitle.className} pb-4 text-center text-xl text-[var(--app-primary-color)]`}
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
          </div>
        </section>
      </div>
    </>
  );
}
