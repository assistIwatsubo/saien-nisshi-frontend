// タグUIを表示するための共通コンポーネント

import type { DiaryDetailType } from "@/types/diary";
import { diaryTypeColorMap } from "@/lib/utils/color-map";

type TagProps =
  | {
      label: string;
      type: DiaryDetailType;
      as?: "span";
      active?: boolean;
    }
  | {
      label: string;
      type: DiaryDetailType;
      as: "button";
      onClick: () => void;
      active?: boolean;
    };

const baseClass =
  "inline-block rounded-full px-2 py-1 text-xs font-bold border ";

export function Tag(props: TagProps) {
  const { label, type, active = false } = props;
  const { border, bg, text } = diaryTypeColorMap[type];

  const buttonActiveClasses = `${border} ${bg} text-white border-solid`;
  const buttonInactiveClasses = `${border} border-dashed ${
    text ?? "text-black" // textが未定義なら黒文字
  }`;

  if (props.as === "button") {
    return (
      <button
        type="button"
        onClick={props.onClick}
        className={`${baseClass} ${active ? buttonActiveClasses : buttonInactiveClasses}`}
      >
        {label}
      </button>
    );
  }

  return (
    <span
      className={`${baseClass} ${border} border-solid ${text ?? "text-black"}`}
    >
      {label}
    </span>
  );
}
