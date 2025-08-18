import Image from "next/image";
import { appTitle } from "../lib/utils/fonts";
import LoginWithModal from "@/ui/molecules/login-with-modal";

export default function Page() {
  return (
    <div data-role="page-wrapper">
      <main
        data-role="content-wrapper"
        className="mx-auto flex w-full flex-col items-center justify-start bg-[var(--app-base-color)]"
      >
        <section data-role="apptitle-section" className="relative py-24">
          <div className="absolute top-1/5 left-1/8 z-10 w-1/2">
            <hgroup className="py-4 text-center">
              <h1
                className={`${appTitle.className} mb-4 text-4xl text-[var(--app-primary-color)] drop-shadow`}
              >
                えんがわ＋
                <br />
                Diary
              </h1>
              <p
                className={`text-xl text-[var(--app-primary-color)] drop-shadow`}
              >
                家庭菜園から始める農ライフ
              </p>
            </hgroup>
            <LoginWithModal />
          </div>
          <div className="m-auto max-w-2/3 opacity-80 md:max-w-1/3 lg:translate-x-2/5">
            <Image
              src="/images/engawa.png"
              alt="家庭菜園から就農支援まで"
              width={1200}
              height={1081}
            />
          </div>
        </section>
        <div data-role="section-wrapper">
          <section>
            <hgroup className="container m-auto my-[10vh] text-center">
              <h2
                className={`${appTitle.className} my-8 text-2xl font-bold text-[var(--app-primary-color)]`}
              >
                えんがわ＋Diary（えんがわぷらすだいありー）
                <span className="ml-1 text-xl font-normal text-gray-800">
                  とは？
                </span>
              </h2>
              <p>
                <span className="leading-loose underline decoration-1 underline-offset-4">
                  農家になりたい人のための
                </span>
                <br />
                栽培支援アプリです。
              </p>
              <p>栽培日誌＋教科書＋コミュニティ機能＋直売所出店支援まで！</p>
            </hgroup>
          </section>
          <section>
            <div className="w-full bg-[var(--app-home-base-color)] py-4 text-center text-[var(--app-primary-color)]">
              <p className="m-1 text-xl leading-normal font-bold">
                もっと本格的に農業をしたい！
              </p>
              <p>あなたのそんな気持ちを応援します！</p>
            </div>
            <div data-role="ul-wrapper" className="px-10 py-[10vh]">
              <h3 className="mb-2 text-center leading-loose">
                こんな人にオススメ！
              </h3>
              <ul className="mx-auto flex w-auto max-w-fit list-disc flex-col gap-4 rounded-2xl bg-white p-6 pl-10">
                <li>
                  <strong>家庭菜園を始めたい</strong>
                  けど、どうしたらいいかわからない。
                </li>
                <li>
                  家庭菜園をしているけど、
                  <strong>次のステップに進みたい</strong>。
                </li>
                <li>
                  副業として<strong>農業を始めたい</strong>。
                </li>
                <li>
                  定年後はUターン・Iターンして<strong>帰農したい</strong>。
                </li>
              </ul>
            </div>
          </section>
          <div data-role="section-wrapper">
            <section>
              <p className="mb-4 text-center">
                ＼
                <span
                  className={`${appTitle.className} mx-1 text-lg font-bold text-[var(--app-primary-color)]`}
                >
                  えんがわ＋Diary
                </span>
                なら！ ／
              </p>
              <div data-role="section__item-wrapper" className="relative">
                <div
                  data-role="image-wrapper"
                  className="sticky top-0 h-[320px] overflow-hidden text-center lg:h-[512px]"
                >
                  <Image
                    data-role="background-image"
                    src="/images/top-bg-point1.jpeg"
                    alt="背景画像"
                    width={768}
                    height={322}
                    className="h-full w-auto object-cover md:w-full"
                  />
                </div>
                <hgroup className="absolute top-[160px] left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/80 p-4 text-center backdrop-blur md:w-[50%] lg:top-[256px]">
                  <p>ポイント①</p>
                  <h3 className="my-4 text-xl">
                    <span className="leading-loose underline decoration-1 underline-offset-4">
                      ノートに記録するみたいに
                    </span>
                    <br />
                    簡単に日誌が書ける！
                  </h3>
                </hgroup>
                <div
                  data-role="description-wrapper"
                  className="relative z-0 bg-white p-8"
                >
                  <p className="m-auto w-[80%] lg:max-w-[60%]">
                    基本的な記録項目は
                    <br />
                    ・作物名
                    <br />
                    ・圃場名（プランターでもOK！）
                    <br />
                    ・（農薬を使った場合は）薬剤名
                    <br />
                    ・詳細
                    <br />
                    だけ！
                    <br />
                    作物名や圃場名は自動でアプリに登録されるので、次回からは表示されたボタンをタップするだけで、すぐに詳細の記録に移れます。
                  </p>
                </div>
              </div>
              <div data-role="section__item-wrapper" className="relative">
                <div
                  data-role="image-wrapper"
                  className="sticky top-0 h-[320px] overflow-hidden text-center lg:h-[512px]"
                >
                  <Image
                    data-role="background-image"
                    src="/images/top-bg-point2.jpeg"
                    alt="背景画像"
                    width={768}
                    height={512}
                    className="h-full w-auto object-cover md:w-full"
                  />
                </div>
                <hgroup className="absolute top-[160px] left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/80 p-4 text-center backdrop-blur md:w-[50%] lg:top-[256px]">
                  <p>ポイント①</p>
                  <h3 className="my-4 text-xl">
                    <span className="leading-loose underline decoration-1 underline-offset-4">
                      ノートに記録するみたいに
                    </span>
                    <br />
                    簡単に日誌が書ける！
                  </h3>
                </hgroup>
                <div
                  data-role="description-wrapper"
                  className="relative z-0 bg-white p-8"
                >
                  <p className="m-auto w-[80%] lg:max-w-[60%]">
                    農業高校でも使われている専門的な入門書を収録しているので、栽培の状況に合わせながら、本格的な農業のために必要な知識を習得できます。
                    <br />
                    栽培中の作物に応じて関連する教科書をアプリが提案するので、知りたいときにすぐ調べられて便利です。
                  </p>
                </div>
              </div>
              <div data-role="section__item-wrapper" className="relative">
                <div
                  data-role="image-wrapper"
                  className="sticky top-0 h-[320px] overflow-hidden text-center lg:h-[512px]"
                >
                  <Image
                    data-role="background-image"
                    src="/images/top-bg-point3.jpeg"
                    alt="背景画像"
                    width={768}
                    height={512}
                    className="h-full w-auto object-cover md:w-full"
                  />
                </div>
                <hgroup className="absolute top-[160px] left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/80 p-4 text-center backdrop-blur md:w-[50%] lg:top-[256px]">
                  <p>ポイント③</p>
                  <h3 className="my-4 text-xl">
                    <span className="leading-loose underline decoration-1 underline-offset-4">
                      みんなと励まし合うから
                    </span>
                    <br />
                    続けられる！
                  </h3>
                </hgroup>
                <div
                  data-role="description-wrapper"
                  className="relative z-0 bg-white p-8"
                >
                  <p className="m-auto w-[80%] lg:max-w-[60%]">
                    コミュニティ機能搭載！
                    <br />
                    他のユーザーの日誌にスタンプやコメントを付けられます。
                    <br />
                    まるでファーマーズスクールのように、みんなで励まし・応援し合いながら理想の農業・農家を目指せます！
                    <br />
                    ※もちろん公開しないこともできます
                  </p>
                </div>
              </div>
              <div data-role="section__item-wrapper" className="relative">
                <div
                  data-role="image-wrapper"
                  className="sticky top-0 h-[320px] overflow-hidden text-center lg:h-[512px]"
                >
                  <Image
                    data-role="background-image"
                    src="/images/top-bg-point4.jpeg"
                    alt="背景画像"
                    width={768}
                    height={512}
                    className="h-full w-auto object-cover md:w-full"
                  />
                </div>
                <hgroup className="absolute top-[160px] left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/80 p-4 text-center backdrop-blur md:w-[50%] lg:top-[256px]">
                  <p>ポイント④</p>
                  <h3 className="my-4 text-xl">
                    初心者向けと上級者向け、
                    <br />
                    <span className="leading-loose underline decoration-1 underline-offset-4">
                      切り替え可能なアプリモード
                    </span>
                  </h3>
                </hgroup>
                <div
                  data-role="description-wrapper"
                  className="relative z-0 bg-white p-8"
                >
                  <p className="m-auto w-[80%] lg:max-w-[60%]">
                    初心者の方向け「家庭菜園モード」と中級～上級者の方向け「脱！家庭菜園モード」をご用意。
                  </p>
                  <p className="m-auto w-[80%] py-6 lg:max-w-[60%]">
                    「家庭菜園モード」は栽培記録をつけることに慣れていただくためのモードで、「脱！家庭菜園モード」はより実践的に、直売所での販売を見越して提出用栽培日誌の必要事項を網羅した栽培記録をつけることができます。
                  </p>
                  <p className="m-auto w-[80%] lg:max-w-[60%]">
                    また、「脱！家庭菜園モード」には「脱！家庭菜園レベル」機能を搭載。
                    <br />
                    指定の項目を達成するごとに「副業・兼業としての農家」に近づきます！
                    <br />
                    達成項目の監修は●●ファーマーズスクール代表の▲▲氏が担当！
                    <br />
                    実経験に基づいて確実にステップアップすることができます！
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
