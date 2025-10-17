import { fetchSafe } from "@/lib/utils/fetchSate";
import { getNewsById } from "@/lib/getNews";
import { getFormattedDate } from "@/lib/utils/format-date";
import { Megaphone, CircleArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const newsEntry = await fetchSafe(() => getNewsById(id));

  if (!newsEntry) {
    return (
      <div className="py-8 text-center text-red-500">
        指定された記録が見つかりません。
      </div>
    );
  }

  return (
    <>
      <div data-roll="official" className="min-h-screen">
        <div
          data-layout="official-title"
          className="bg-[var(--app-home-base-color)]/50"
        >
          <nav className="m-auto px-4 pt-1 pb-1.5 text-sm text-[var(--app-primary-color)] md:max-w-[80vw]">
            <Link href="/news" className="flex items-center gap-1">
              <CircleArrowLeft size={20} color="darkGreen" />
              <Megaphone size={20} className="ml-2" />
              お知らせ一覧
            </Link>
          </nav>
        </div>
        <section
          className="m-auto my-8 rounded-sm bg-white/75 p-4 md:max-w-[80vw]"
          data-layout="official-body"
        >
          <h3 className="py-2 text-3xl font-bold">{newsEntry.title}</h3>
          <p className="py-4 text-sm text-gray-500">
            公開日：{getFormattedDate(new Date(newsEntry.date))}
          </p>
          <div className="border-t-1 border-dashed border-[var(--app-secondary-color)] py-4">
            <p>{newsEntry.body}</p>
          </div>
        </section>
      </div>
    </>
  );
}
