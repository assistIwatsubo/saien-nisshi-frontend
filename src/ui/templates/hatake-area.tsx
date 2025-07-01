type Props = {
  children: React.ReactNode;
};

export default function DiaryArea({ children }: Props) {
  return (
    <section
      data-role="diary-check-section"
      className="container m-auto p-4 md:max-w-[80vw]"
      aria-labelledby="diary-section-title"
    >
      {children}
    </section>
  );
}
