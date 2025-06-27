import { usePathname } from "next/navigation";
import DynamicButton from "@/ui/atoms/dynamic-button";
import DynamicButtonCircle from "@/ui/atoms/dynamic-button-circle";

export const useDynamicButtons = (): React.ReactNode => {
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/\/$/, "");

  switch (true) {
    case normalizedPath === "/home":
      return (
        <>
          <DynamicButtonCircle variant="calender" />
          <DynamicButton variant="create" />
        </>
      );

    case normalizedPath.startsWith("/home/create"):
    case normalizedPath.startsWith("/home/edit"):
    default:
      return <DynamicButton variant="back" />;
  }
};
