import Image from "next/image";
import { useCharacterComment } from "@/hooks/useCharacterComment";
import type { HomeState } from "@/types/character";

type Props = {
  homeState: HomeState;
};

export default function HomeCharacter({ homeState }: Props) {
  const comment = useCharacterComment(homeState);

  return (
    <aside
      aria-label={comment}
      className="container m-auto py-4 md:max-w-[80%]"
    >
      <div className="flex flex-1 items-center justify-start gap-5">
        <div className="h-12 w-12 min-w-12 overflow-hidden rounded-full border-[var(--app-primary-color)] bg-white p-1">
          <Image
            src="/icons/sample-ladybug.jpg"
            alt="ladybug"
            width={384}
            height={384}
            className="object-contain"
          />
        </div>
        <div className="relative min-h-12 w-fit rounded-full border-2 border-white bg-white px-4 py-3 text-black shadow-md before:absolute before:top-1/2 before:left-0 before:-translate-x-3 before:-translate-y-1/2 before:border-y-[6px] before:border-r-[12px] before:border-l-0 before:border-y-transparent before:border-r-white">
          <p className="text-base leading-tight">{comment}</p>
        </div>
      </div>
    </aside>
  );
}
