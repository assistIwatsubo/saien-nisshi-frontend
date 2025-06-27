import Link from "next/link";
import Image from "next/image";

type Props = {
  variant?: "calender" | "list";
};

export default function DynamicButtonCircle({ variant = "calender" }: Props) {
  let text: string;
  let iconSrc: string;
  let href: string;

  switch (variant) {
    case "calender":
      text = "カレンダーを見る";
      iconSrc = "/icons/calender.png";
      href = "/home/create";
      break;
    case "list":
    default:
      text = "記録一覧に戻る";
      iconSrc = "/icons/list.png";
      href = "/home/edit";
      break;
  }

  return (
    <>
      <Link
        href={href}
        className="flex h-26 w-26 flex-col items-center justify-center gap-1 overflow-hidden rounded-full border-4 border-[var(--app-home-base-color)] bg-white p-4 shadow-lg"
      >
        <Image
          data-role="icon"
          src={iconSrc}
          alt=""
          width={128}
          height={128}
          className="p-3 py-1"
        />
        <span className="text-center text-xs font-bold">{text}</span>
      </Link>
    </>
  );
}
