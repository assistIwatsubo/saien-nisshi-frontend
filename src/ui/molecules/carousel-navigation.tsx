import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";

const accountingColor = "app-accounting-color";
const anotherColor = "app-another-color";

export default function CarouselNavigation() {
  return (
    <nav
      data-role="home-menu__nav"
      className="relative mt-8 h-9 border-b-2 border-[var(--app-secondary-color)]"
    >
      <button
        id="right"
        className={`absolute top-1 left-0 inline-flex items-center-safe ${anotherColor} rounded-full px-1 pr-2 pl-1 text-sm leading-normal`}
        type="button"
      >
        <ChevronsLeft color="currentColor" />
        出退勤
      </button>
      <h3
        id="home-menu-title"
        className="app-text-shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-t-md bg-[var(--app-secondary-color)] px-4 py-1 text-lg font-bold text-white shadow-md"
      >
        直近の日誌一覧
      </h3>
      <button
        id="right"
        className={`absolute top-1 right-0 inline-flex items-center-safe ${accountingColor} rounded-full pr-1 pl-2 text-right text-sm leading-normal`}
        type="button"
      >
        出納帳
        <ChevronsRight color="currentColor" />
      </button>
    </nav>
  );
}
