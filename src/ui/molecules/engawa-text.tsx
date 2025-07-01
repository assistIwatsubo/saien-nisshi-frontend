import SectionH3 from "./section-h3";
import TitleH3 from "../atoms/title-h3";
import { Link } from "lucide-react";
import { BookText } from "lucide-react";

type TextProps = {
  textName: string[] | null;
};

export default function EngawaText({ textName }: TextProps) {
  return (
    <SectionH3>
      <TitleH3
        id="text-area-title"
        label="教科書を読む"
        type="withLine"
        color="primary"
        iconType="library"
      />
      <ul className="flex flex-wrap justify-start gap-4 py-2">
        {textName?.map((item, index) => (
          <li key={index}>
            <Link
              href={`/text/${item}`}
              className="flex w-full flex-col items-start justify-center gap-2 rounded-md border-2 border-[var(--app-primary-color)] bg-white px-4 py-3 font-bold text-[var(--app-primary-color)]"
            >
              <BookText
                width={40}
                height={40}
                color="currentColor"
                className="m-auto"
              />
              {item}の教科書
            </Link>
          </li>
        ))}
      </ul>
    </SectionH3>
  );
}
