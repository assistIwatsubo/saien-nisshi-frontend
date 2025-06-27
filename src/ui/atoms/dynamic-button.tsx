import Link from "next/link";
import Image from "next/image";

type Props = {
  variant?: "create" | "edit" | "back" | "home";
};

export default function DynamicButton({ variant = "home" }: Props) {
  let text: string;
  let href: string;

  switch (variant) {
    case "create":
      text = "今日の記録を付ける";
      href = "/home/create";
      break;
    case "edit":
      text = "今日の記録を編集する";
      href = "/home/edit";
      break;
    case "back":
    default:
      text = "戻る";
      href = "/home";
      break;
  }

  return (
    <>
      <Link
        href={href}
        className="absolute bottom-0 left-1/2 z-1 w-[120px] -translate-x-1/2 rounded-t-full bg-[var(--app-home-base-color)] p-4 text-center text-xs font-bold shadow-lg"
      >
        <Image
          data-role="icon"
          src="/icons/pencil.png"
          alt=""
          width={128}
          height={128}
          className="p-4 pt-2"
        />
        {text}
      </Link>
    </>
  );
}
