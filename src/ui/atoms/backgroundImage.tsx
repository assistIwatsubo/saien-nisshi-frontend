type Props = {
  imageUrl: string;
};

export default function BackgroundImage({
  imageUrl = "/images/sample-home-bg.jpeg",
}: Props) {
  return (
    <div
      data-role="background-image"
      className={`fixed top-0 right-0 h-full w-full bg-cover bg-left`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
}
