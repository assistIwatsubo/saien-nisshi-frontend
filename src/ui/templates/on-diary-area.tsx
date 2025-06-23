type Props = {
  children: React.ReactNode;
};

export default function OnDiaryArea({ children }: Props) {
  return (
    <section
      data-role="system-section"
      className="relative m-auto w-full bg-gradient-to-b from-white/70 to-white/0 p-4"
      aria-labelledby="diary-section-title"
    >
      {children}
    </section>
  );
}
