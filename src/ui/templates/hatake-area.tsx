type Props = {
  children: React.ReactNode;
};

export default function HatakeArea({ children }: Props) {
  return (
    <section
      data-role="diary-check-section"
      className="relative m-auto min-h-screen flex-grow p-4 md:max-w-[80vw]"
      aria-labelledby="diary-section-title"
    >
      {children}
    </section>
  );
}
