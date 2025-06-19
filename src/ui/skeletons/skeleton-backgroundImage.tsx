import { appTitle } from "@/lib/fonts";

export default function SkeletonBackgroundImage() {
  return (
    <div
      data-role="background-image"
      className="fixed top-0 left-0 z-0 h-full w-full bg-gray-300"
    >
      <span
        className={`${appTitle.className} absolute top-[30%] left-1/2 -translate-x-1/2 text-4xl font-bold opacity-20`}
      >
        みどりぽ
      </span>
    </div>
  );
}
