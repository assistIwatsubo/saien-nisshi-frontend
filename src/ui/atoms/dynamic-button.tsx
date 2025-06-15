import Link from "next/link";
import Image from "next/image";

type Props = {
  variant?: "create" | "back" | "home";
};

export default function DynamicButton({ variant = "home" }: Props) {
  let text: string;

  switch (variant) {
    case "create":
      text = "今日の記録を付ける";
      break;
    case "back":
      text = "あなたのページへ";
      break;
    case "home":
    default:
      text = "トップページへ";
      break;
  }
  return (
    <Link
      href={variant}
      className="sticky bottom-0 left-1/2 z-1 block w-[120px] -translate-x-1/2 rounded-t-full bg-[var(--app-home-base-color)] p-4 text-center text-xs font-bold"
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
  );
}
