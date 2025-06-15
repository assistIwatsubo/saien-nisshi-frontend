"use client";
import { appTitle, comment } from "@/lib/fonts";
import PageTitle from "@/ui/atoms/page-title";
import DecorationArch from "@/ui/atoms/decoration-arch";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  if (!session) return;
  return (
    <>
      <section
        data-role="diary-check-8section"
        className="relative min-h-[50vh] py-8"
      >
        <PageTitle />
        <p>こんにちは、{session.user?.name ?? "ユーザー"}さん！</p>
      </section>
      <div data-role="section-wrapper" className="relative h-auto w-full">
        <DecorationArch />
        <section
          data-role="system-section"
          className="bg-[var(--app-base-color)] px-[4%] pt-4 pb-32 lg:px-[20%]"
        >
          <h2
            className={`${appTitle.className} mb-4 text-center text-[var(--app-secondary-color)]`}
          >
            ひとやすみ
          </h2>
          <section>
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section>
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section>
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section>
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section>
            <h3>教科書を読む</h3>
            <ul>
              <li>●●の教科書</li>
            </ul>
          </section>
          <section>
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
