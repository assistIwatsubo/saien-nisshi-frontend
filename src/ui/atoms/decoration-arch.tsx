import Image from "next/image";

export default function DecorationArch() {
  return (
    <Image
      data-role="background-arch"
      src="/images/bg-arch.png"
      width={1200}
      height={50}
      alt=""
      priority
      className="relative top-0 z-0 mt-4 h-auto w-full object-cover xl:top-[1px]"
    />
  );
}
