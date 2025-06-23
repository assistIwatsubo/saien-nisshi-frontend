type Props = {
  children: React.ReactNode;
};

export default function SectionH3({ children }: Props) {
  return <section className="py-8">{children}</section>;
}
