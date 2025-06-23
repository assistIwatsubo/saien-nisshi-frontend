import Link from "next/link";
import Image from "next/image";

type IconProps = {
  userId: string;
  userName: string;
  iconSrc: string;
};

export default function UserIcon({ userId, userName, iconSrc }: IconProps) {
  return (
    <Link href={`/${userId}/profile`}>
      <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-[var(--app-primary-color)] bg-white p-1">
        <Image
          src={iconSrc ?? "/icons/sample-user-icon.png"}
          alt={userName}
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
    </Link>
  );
}
