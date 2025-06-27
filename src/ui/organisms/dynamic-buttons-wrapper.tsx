type Props = {
  children: React.ReactNode;
};

export default function DynamicButtonsWrapper({ children }: Props) {
  if (!children) return null; // nullなら表示しない

  return (
    <>
      <div
        data-role="dynamic-button-wrapper"
        className="sticky right-0 bottom-0 left-0 z-2 flex h-36 items-start justify-between px-4"
      >
        {children}
      </div>
      <div
        data-layout="dynamic-button-bg"
        className="absolute right-0 bottom-6 left-0 h-40 w-full border-1 border-white bg-white"
      ></div>
    </>
  );
}
