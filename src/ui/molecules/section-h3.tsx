type Props = {
  children: React.ReactNode;
};

export default function SectionH3({ children }: Props) {
  return (
    <section className="app-blurred-bg-ivory flex-1 border-4 border-amber-900 p-4 shadow-lg">
      {children}
    </section>
  );
}
