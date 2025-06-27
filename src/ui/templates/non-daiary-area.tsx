import HelpNavigation from "@/ui/organisms/help-navigation";
import { appTitle } from "@/lib/utils/fonts";
type Props = {
  title: string;
  children: React.ReactNode;
};

export default function NonDiaryArea({ title, children }: Props) {
  return (
    <section
      data-role="system-section"
      className="pt-4"
      aria-labelledby="non-diary-area-title"
    >
      <div
        data-role="system-section__inner"
        className="container m-auto p-4 md:max-w-[80vw]"
      >
        <h2
          className={`${appTitle.className} pb-4 text-center text-xl text-[var(--app-primary-color)]`}
          id="non-diary-area-title"
        >
          {title}
        </h2>
        {children}
      </div>
      <HelpNavigation />
    </section>
  );
}
