"use client";

import { DiaryEntry } from "@/types/diary";
import Image from "next/image";
import Link from "next/link";

const baseClass = "inline-flex items-center text-center";

type Props = {
  diary: DiaryEntry;
};

export default function SnsButtonsNav({ diary }: Props) {
  const handleXPost = () => {
    const text = encodeURIComponent(`${diary.title}\n${diary.summary}`);
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleFacebookPost = () => {
    const url = encodeURIComponent("https://example.com"); // 日誌ページのURLなど
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(fbUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="px-4 py-1">
      <ul className="flex items-center justify-center gap-8">
        <li className={baseClass}>
          <button
            onClick={handleXPost}
            className={`${baseClass} rounded bg-black p-1`}
          >
            <Image
              src="/icons/X-logo.svg"
              alt="Xに投稿する"
              width={16}
              height={16}
            />
          </button>
        </li>

        <li className={baseClass}>
          <button onClick={handleFacebookPost}>
            <Image
              src="/icons/FaceBook-logo.png"
              alt="Facebookに投稿する"
              width={24}
              height={24}
            />
          </button>
        </li>

        <li className={baseClass}>
          <Link
            href="instagram://app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/Instagram-logo.png"
              alt="Instagramアプリを開く"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
