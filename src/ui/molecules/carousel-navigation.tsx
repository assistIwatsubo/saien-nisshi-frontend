import { ChevronsLeft, ChevronsRight } from "lucide-react";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  currentLabel: string;
  currentColor: string;
  prevLabel: string;
  nextLabel: string;
  prevColor: string;
  nextColor: string;
};

export default function CarouselNavigation({
  onPrev,
  onNext,
  currentLabel,
  currentColor,
  prevLabel,
  nextLabel,
  prevColor,
  nextColor,
}: Props) {
  // 今のactiveViewのcolorClass
  const activeColorClass = currentColor;
  // bg-をborder-に置換
  const varName =
    activeColorClass.match(/\[(var\(.*\))\]/)?.[1] ||
    "var(--app-secondary-color)";

  return (
    <nav
      className={`relative mt-8 h-9 border-b-2`}
      style={{ borderColor: `${varName}` }}
    >
      <button
        onClick={onPrev}
        className={`absolute top-1 left-0 inline-flex items-center-safe ${prevColor} rounded-full px-1 pr-2 pl-1 text-sm leading-normal text-white transition duration-300 ease-in-out`}
        type="button"
      >
        <ChevronsLeft color="currentColor" />
        {prevLabel}
      </button>
      <h3
        className={`app-text-shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-t-md ${currentColor} px-4 py-1 text-lg font-bold text-white shadow-md transition duration-300 ease-in-out`}
      >
        {currentLabel}
      </h3>
      <button
        onClick={onNext}
        className={`absolute top-1 right-0 inline-flex items-center-safe ${nextColor} rounded-full pr-1 pl-2 text-right text-sm leading-normal text-white transition duration-300 ease-in-out`}
        type="button"
      >
        {nextLabel}
        <ChevronsRight color="currentColor" />
      </button>
    </nav>
  );
}
