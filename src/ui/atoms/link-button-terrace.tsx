import Link from "next/link";
import { HousePlus } from "lucide-react";

export default function LinkButtonTerrace() {


  return (
    <div className="sticky bottom-0 left-0 pl-4 pb-6 z-2">
      <Link href="/terrace"
        className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[var(--app-secondary-color-dark)] text-center text-xs font-bold text-white shadow-lg app-text-shadow"
      >
        <HousePlus width={40} height={40} color="white" />
        縁側に戻る
      </Link>
    </div>
  );
}
