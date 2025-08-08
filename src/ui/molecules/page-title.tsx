import { pageTitle as font } from "@/lib/utils/fonts";
import type { ReactNode } from "react";

type PageTitleProps = {
  title: string;
  icon: ReactNode;
  mode?: "edit";
};

export default function PageTitle({ title, icon }: PageTitleProps) {
  return (
    <div className="m-auto mb-6 w-fit border-r-4 border-l-4 border-yellow-700 pt-8 saturate-50">
      <div className="app-blurred-bg-white m-auto flex w-fit items-center gap-3 border-t-1 border-b-1 border-white px-8 py-2 text-[var(--app-primary-color)]">
        {icon}
        <h2 className={`${font.className} text-center text-2xl font-bold`}>
          {title}
        </h2>
      </div>
    </div>
  );
}
