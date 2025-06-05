import Image from "next/image";
import { appTitle, system, comment } from "../lib/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container flex h-[90vh] flex-col items-center justify-center bg-green-200 saturate-50 filter">
        <div className="container flex h-[60%] w-[50%] flex-col items-center justify-center rounded-4xl">
          <hgroup className="pb-10">
            <h1
              className={`${appTitle.className} text-center text-7xl leading-loose font-bold text-green-900`}
            >
              みどりぽ
            </h1>
            <p
              className={`${system.className} text-center text-2xl leading-normal font-bold text-green-900 saturate-50 filter`}
            >
              私の脱！家庭菜園日誌
            </p>
          </hgroup>
          <Link
            href="/home"
            className="rounded bg-green-500 px-4 py-2 font-bold text-white shadow-md saturate-100 filter transition-all hover:bg-orange-400"
          >
            ホームへ
          </Link>
        </div>
      </div>
      <main className={`${system.className} h-auto w-full bg-amber-50`}>
        <div className="container w-full">
          <div className="container m-auto w-[80%]">
            <hgroup className="flex flex-col items-center justify-center gap-16 pt-40 pb-40">
              <h2 className="text-center text-4xl leading-loose font-bold">
                <span className={`${appTitle.className} text-6xl`}>
                  みどりぽ　
                </span>
                とは
              </h2>
              <p className="text-center text-2xl leading-loose font-bold">
                農家になりたい人のための農作業日誌アプリです
              </p>
            </hgroup>
          </div>
        </div>
      </main>
    </>
  );
}
