import EngawaArea from "@/ui/templates/engawa-area";
import SectionH3 from "@/ui/molecules/section-h3";
import TitleH3 from "@/ui/atoms/title-h3";
import LinkButtonWithIcon from "@/ui/atoms/link-button-with-icon";
import BottomNav from "@/ui/templates/bottom-nav";
import { fetchSafe } from "@/lib/utils/fetchSate";
import { getUserData } from "@/lib/getUserData";
import { APP_MODE_LABEL } from "@/types";
import { CollapsibleItem } from "@/ui/atoms/collapsible-item";
import Button from "@/ui/atoms/button";

const currentUserId = "u001"; // 実際はセッションや JWT などから取得

export default async function Page() {
  const userData = await fetchSafe(() => getUserData(currentUserId));

  if (!userData) {
    return;
  }

  return (
    <>
      <EngawaArea title="マイ設定">
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="アプリ全般設定"
            type="withLine"
            color="primary"
            iconType="settings"
          />
          <ul className="space-y-6 p-2">
            <li>
              <CollapsibleItem title="アプリモード">
                <form
                  action="submit"
                  className="flex flex-col items-start justify-start gap-2 p-2"
                >
                  <label htmlFor="app-mode-beginner">
                    <input
                      type="radio"
                      name="app-mode"
                      id="app-mode-beginner"
                      value="beginner"
                      className="mr-2 scale-120"
                    />
                    {APP_MODE_LABEL["beginner"]}モード
                  </label>
                  <label htmlFor="app-mode-pro">
                    <input
                      type="radio"
                      name="app-mode"
                      id="app-mode-pro"
                      value="pro"
                      className="mr-2 scale-120"
                    />
                    {APP_MODE_LABEL["pro"]}モード
                  </label>
                  <Button>変更する</Button>
                </form>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="複数人での記録">
                <form
                  action="submit"
                  className="flex flex-col items-start justify-start gap-2 p-2"
                >
                  <label htmlFor="diary-type-personal">
                    <input
                      type="radio"
                      name="diary-type"
                      id="diary-type-personal"
                      value="personal"
                      className="mr-2 scale-120"
                    />
                    OFF
                  </label>
                  <label htmlFor="diary-type-shared">
                    <input
                      type="radio"
                      name="diary-type"
                      id="diary-type-shared"
                      value="shared"
                      className="mr-2 scale-120"
                    />
                    ON
                  </label>
                  <Button>変更する</Button>
                </form>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="作業時間の記録">
                <form
                  action="submit"
                  className="flex flex-col items-start justify-start gap-2 p-2"
                >
                  <label htmlFor="worktime-record-off">
                    <input
                      type="radio"
                      name="worktime-record"
                      id="worktime-record-off"
                      defaultValue="off"
                      className="mr-2 scale-120"
                    />
                    OFF
                  </label>
                  <label htmlFor="worktime-record-on">
                    <input
                      type="radio"
                      name="worktime-record"
                      defaultValue="on"
                      id="worktime-record-on"
                      className="mr-2 scale-120"
                    />
                    ON
                  </label>
                  <Button>変更する</Button>
                </form>
              </CollapsibleItem>
            </li>
          </ul>
        </SectionH3>
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="記録関連設定"
            type="withLine"
            color="primary"
            iconType="settings"
          />
          <ul className="space-y-6 p-2">
            <li>
              <CollapsibleItem title="圃場（畑）の登録状況">
                <ul>
                  <li>一覧出す</li>
                </ul>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="作物の登録状況">
                <ul>
                  <li>一覧出す</li>
                </ul>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="薬剤の登録状況">
                <ul>
                  <li>一覧出す</li>
                </ul>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="日誌の公開範囲">
                <form
                  action="submit"
                  className="flex flex-col items-start justify-start gap-2 p-2"
                >
                  <label htmlFor="visibility-public">
                    <input
                      type="radio"
                      name="diary-visibility"
                      id="visibility-public"
                      value="public"
                      className="mr-2 scale-120"
                    />
                    すべてのユーザーに公開
                  </label>
                  <label htmlFor="visibility-followers">
                    <input
                      type="radio"
                      name="diary-visibility"
                      id="visibility-followers"
                      value="followers"
                      className="mr-2 scale-120"
                    />
                    お互いにフォロー中のユーザーのみに公開
                  </label>
                  <label htmlFor="visibility-private">
                    <input
                      type="radio"
                      name="diary-visibility"
                      id="visibility-private"
                      value="private"
                      className="mr-2 scale-120"
                    />
                    非公開
                  </label>
                  <Button>変更する</Button>
                </form>
              </CollapsibleItem>
            </li>
          </ul>
        </SectionH3>
        <SectionH3>
          <TitleH3
            id="text-area-title"
            label="カレンダー関連設定"
            type="withLine"
            color="primary"
            iconType="settings"
          />
          <ul className="space-y-6 p-2">
            <li>
              <CollapsibleItem title="週の始まり">
                <form
                  action="submit"
                  className="flex flex-col items-start justify-start gap-2 p-2"
                >
                  <label htmlFor="calendar-start-with-sunday">
                    <input
                      type="radio"
                      name="calendar-start-with"
                      id="calendar-start-with-sunday"
                      value="sunday"
                      className="mr-2 scale-120"
                    />
                    日曜
                  </label>
                  <label htmlFor="calendar-start-with-monday">
                    <input
                      type="radio"
                      name="calendar-start-with"
                      id="calendar-start-with-monday"
                      value="monday"
                      className="mr-2 scale-120"
                    />
                    月曜
                  </label>
                </form>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="作物の登録状況">
                <ul>
                  <li>一覧出す</li>
                </ul>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="薬剤の登録状況">
                <ul>
                  <li>一覧出す</li>
                </ul>
              </CollapsibleItem>
            </li>
            <li>
              <CollapsibleItem title="日誌の公開範囲">
                <form
                  action="submit"
                  className="flex flex-col items-start justify-start gap-2 p-2"
                >
                  <label htmlFor="visibility-public">
                    <input
                      type="radio"
                      name="diary-visibility"
                      id="visibility-public"
                      value="public"
                      className="mr-2 scale-120"
                    />
                    すべてのユーザーに公開
                  </label>
                  <label htmlFor="visibility-followers">
                    <input
                      type="radio"
                      name="diary-visibility"
                      id="visibility-followers"
                      value="followers"
                      className="mr-2 scale-120"
                    />
                    お互いにフォロー中のユーザーのみに公開
                  </label>
                  <label htmlFor="visibility-private">
                    <input
                      type="radio"
                      name="diary-visibility"
                      id="visibility-private"
                      value="private"
                      className="mr-2 scale-120"
                    />
                    非公開
                  </label>
                </form>
              </CollapsibleItem>
            </li>
          </ul>
        </SectionH3>
      </EngawaArea>
      <BottomNav>
        <LinkButtonWithIcon href="terrace" />
      </BottomNav>
    </>
  );
}
