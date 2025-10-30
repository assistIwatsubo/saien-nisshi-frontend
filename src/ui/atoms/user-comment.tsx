import Link from "next/link";

type commentProps = {
  diaryId: number;
  userSlug: string;
  title: string;
  date: string;
};

export default function UserComment({
  diaryId,
  userSlug,
  title,
  date,
}: commentProps) {
  return (
    <Link href={`/${userSlug}/id?=${diaryId}`} className="w-full">
      <div className="relative min-h-14 w-full rounded-full border-4 border-[var(--app-home-base-color)] bg-white px-4 py-3 text-black shadow-md before:absolute before:top-1/2 before:left-0 before:-translate-x-4 before:-translate-y-1/2 before:border-y-[6px] before:border-r-[12px] before:border-l-0 before:border-y-transparent before:border-r-[var(--app-home-base-color)]">
        <h4 className="text-base leading-tight">{title}</h4>
      </div>
      <time
        dateTime={date}
        className="inline-block w-full text-right text-xs text-gray-400"
      >
        {new Date(date).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </time>
    </Link>
  );
}
