import SkeletonBackgroundImage from "../skeletons/skeleton-backgroundImage";

type Props = {
  imageUrl: string;
};

export default function BackgroundImage({
  imageUrl = "/images/sample-home-bg.jpeg",
}: Props) {
  return (
    <div
      data-role="background-image"
      className={`fixed top-0 left-0 h-full w-full bg-cover bg-center blur-[2px] saturate-90 transition-opacity duration-700`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
}
