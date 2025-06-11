import Image from "next/image";
import { appTitle, system, comment } from "@/lib/fonts";
import Link from "next/link";
import PageTitle from "@/components/ui/page-title";

export default function Home() {
  return (
    <div id="diary-wrapper" className="py-10">
      <PageTitle />
    </div>
  );
}
