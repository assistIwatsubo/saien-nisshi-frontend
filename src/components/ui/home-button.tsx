import Link from "next/link";
import Image from "next/image";

type Props = {
  variant?: "home" | "back" | "create" | "edit";
};

export default function HomeButton({ variant = "home" }: Props) {
  return (
    <Link href={variant}>
      <Image
        data-role="icon"
        src="/icons/pencil.png"
        alt=""
        width={120}
        height={120}
      />
    </Link>
  );
}
