export default function BackgroundImage() {
  // いずれfetch用関数からユーザー設定データのsettingImageを取得する
  const settingImage = "";
  const imageUrl = settingImage || "/images/sample-home-bg.jpeg";

  return (
    <div
      data-role="background-image"
      className="fixed top-0 left-0 z-0 h-[70vh] w-full bg-cover bg-right blur-[2px] saturate-80"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
}
