import { diaryTypeColorMap } from "@/lib/utils/color-map";
import { DIARY_DETAIL_TYPES, DiaryDetailType, typeLabels } from "@/types/diary";

type DiaryDetailMenuProps = {
  selected: DiaryDetailType;
  onChange: (value: DiaryDetailType) => void;
  name: string;
};

export default function DiaryDetailMenu({
  selected,
  onChange,
  name,
}: DiaryDetailMenuProps) {
  return (
    <ul className="m-auto mb-6 flex flex-row items-start justify-center gap-8">
      {DIARY_DETAIL_TYPES.map((value, index) => {
        const isSelected = selected === value;
        const borderClass = isSelected
          ? diaryTypeColorMap[selected].border
          : "border-transparent";

        return (
          <li
            key={value}
            className={`flex cursor-pointer items-center gap-2 rounded-full border-3 px-4 py-2 transition ${borderClass}`}
          >
            <input
              type="radio"
              id={`radio-${name}-${index}`}
              name={name}
              value={value}
              checked={isSelected}
              onChange={() => onChange(value)}
              className="h-4 w-4 scale-120"
            />
            <label
              htmlFor={`radio-${name}-${index}`}
              className="cursor-pointer font-bold text-gray-600"
            >
              {typeLabels[value]}
              <span className="block text-xs font-normal text-gray-600">
                について
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
