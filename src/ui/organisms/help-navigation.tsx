import TitleH3 from "../atoms/title-h3";
import LinkButtonTextIcon from "../atoms/link-button-text-icon";

const helpLinks = [
  { label: "よくあるご質問", href: "/faq" },
  { label: "詳しい使い方", href: "/howToUse" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function HelpAside() {
  return (
    <aside className="bg-white" aria-labelledby="help-nav">
      <div className="container m-auto px-4 py-8 md:max-w-[80vw]">
        <TitleH3
          id="help-nav"
          label="困ったときは"
          iconType="badgeHelp"
          type="withLine"
          color="gray"
        />
        <nav>
          <ul className="divide-y divide-[var(--app-border-gray)] border-y-1 border-[var(--app-border-gray)]">
            {helpLinks.map(({ label, href }) => (
              <li key={href}>
                <LinkButtonTextIcon
                  label={label}
                  href={href}
                  iconType="arrow"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
