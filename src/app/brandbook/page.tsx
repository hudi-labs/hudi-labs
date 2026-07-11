import type { Metadata } from "next";
import { BrandbookManual } from "@/components/brandbook/BrandbookManual";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Brand Book | Hudi Labs",
  description: "Sistema verbal e visual da Hudi Labs.",
};

export default function BrandbookPage() {
  return (
    <>
      <SiteHeader currentPage="brandbook" />
      <BrandbookManual />
      <SiteFooter currentPage="brandbook" />
    </>
  );
}
