type Props = {
  children: React.ReactNode;
};

export default function DiaryArea({ children }: Props) {
  return (
    <section
      data-role="diary-check-section"
      className="relative container m-auto p-4 pt-12 md:max-w-[80vw]"
      aria-labelledby="diary-section-title"
    >
      {children}
    </section>
  );
}
