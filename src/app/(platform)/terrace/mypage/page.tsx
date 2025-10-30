import EngawaArea from "@/ui/templates/engawa-area";
import SectionH3 from "@/ui/molecules/section-h3";
import TitleH3 from "@/ui/atoms/title-h3";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getUserData } from "@/lib/getUserData";
import Image from "next/image";
import UserIcon from "@/ui/atoms/user-icon";
import LinkButtonMini from "@/ui/atoms/link-button-mini";
import { Pencil } from "lucide-react";
import { CollapsibleItem } from "@/ui/atoms/collapsible-item";
import type { UserData } from "@/types/user-data";

export default async function Page() {
  const userData = await fetchSafe(() => getUserData());

  if (!userData) {
    return;
  }

  return (
    <>
      <EngawaArea title="マイページ">
        <div className="flex flex-col items-center justify-start p-8">
          <figure className="rounded-full bg-white p-6">
            <Image
              src={`http://localhost:8080${userData.imageUrl}`}
              alt={userData.userName}
              width={150}
              height={150}
            />
          </figure>
          <div className="flex flex-col gap-2 py-6 text-center font-bold">
            <p className="text-xl">{userData.userName}さん</p>
            <p className="text-lg">
              レベル
              {/* {userData.appMode === "pro"
                ? userData.proLevel
                : userData.beginnerLevel} */}
            </p>
          </div>
          <ul className="flex w-3/4 flex-col gap-4 rounded-2xl bg-white px-8 py-4">
            <li className="border-b-2 border-[var(--app-secondary-color)] pb-2 text-center">
              {userData.currentModeData?.mode.label}モード継続
              <br />
              {userData.currentModeData?.durationDays}日
            </li>
            <li className="flex">
              <div className="flex-2/5">二つ名</div>
              <div className="flex flex-3/5 items-center before:mr-2 before:content-[':']">
                <button className="flex w-full items-center justify-between border-b border-dashed px-2">
                  <span>{userData.nickname}</span>
                  <Pencil size={18} />
                </button>
              </div>
            </li>

            <li className="flex">
              <div className="flex-2/5">好きな作物</div>
              <div className="flex flex-3/5 items-center before:mr-2 before:content-[':']">
                <button className="flex w-full items-center justify-between border-b border-dashed px-2">
                  <span>{userData.favoriteCrop?.cropName || "登録なし"}</span>
                  <Pencil size={18} />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="菜園レベル達成状況"
            type="withLine"
            color="primary"
            iconType="sprout"
          />
          <ol className="space-y-6 p-2">
            <li>
              <CollapsibleItem title="レベル１">
                {" "}
                <ol className="ml-8 py-2">
                  <li>mapで出力する</li>
                </ol>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="レベル２">
                {" "}
                <ol className="ml-8 py-2">
                  <li>mapで出力する</li>
                </ol>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="レベル３">
                {" "}
                <ol className="ml-8 py-2">
                  <li>mapで出力する</li>
                </ol>
              </CollapsibleItem>
            </li>
          </ol>
        </SectionH3>
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="あなたがフォロー中のユーザー"
            type="withLine"
            color="primary"
            iconType="star"
          />
          <ol className="flex flex-wrap gap-4 py-4">
            {userData.followings?.map((u: UserData) => (
              <li
                key={u.userSlug}
                className="flex flex-col items-center justify-start gap-0.5"
              >
                <UserIcon
                  userSlug={u.userSlug}
                  userName={u.userName}
                  iconSrc={u.imageUrl}
                />
                <span className="text-xs">{u.userName}</span>
              </li>
            ))}
          </ol>
          <div className="w-full py-8 text-center">
            <LinkButtonMini
              href="/terrace/mypage/following"
              label="一覧を見る"
              variant="secondary"
            />
          </div>
        </SectionH3>
      </EngawaArea>
      <BottomNav>
        <LinkButtonWithIcon variant="terrace" />
      </BottomNav>
    </>
  );
}
