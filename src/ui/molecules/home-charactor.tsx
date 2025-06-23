import UserIcon from "../atoms/user-icon";
import UserComment from "../atoms/user-comment";

export default function HomeCharactor() {
  return (
    <aside
      aria-label="ladybugの仮テキスト！"
      className="container m-auto py-4 md:max-w-[80%]"
    >
      <div className="m-auto flex flex-row items-stretch justify-start gap-4 md:max-w-[80vw]">
        <UserIcon
          userId="123"
          iconSrc="/icons/sample-ladybug.jpg"
          userName="ladybug"
        />
        <UserComment
          id="123"
          userId="123"
          title="仮テキスト！"
          dateTime="2025-06-23"
        />
      </div>
    </aside>
  );
}
