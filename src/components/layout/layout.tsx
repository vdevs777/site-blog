import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";
import { CallToAction } from "@/templates/landing-page/sections";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const PTSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} ${PTSansCaption.className} font-inter relative flex min-h-screen flex-col dark bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12 mt-8">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
}
