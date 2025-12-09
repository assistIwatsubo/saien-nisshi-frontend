type Props = {
  children: React.ReactNode;
};

export default function HatakeArea({ children }: Props) {
  return (
    <section
      data-role="diary-check-section"
      className="relative m-auto min-h-screen max-w-full flex-grow py-8 md:max-w-9/10"
      aria-labelledby="diary-section-title"
    >
      {children}
    </section>
  );
}
