import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Myanmar } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const _geistSans = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _notoSansMyanmar = Noto_Sans_Myanmar({ subsets: ["myanmar"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: "MMXX - Myanmar Video Entertainment",
    template: "%s | MMXX",
  },
  description: "Watch and download quality Myanmar entertainment videos. Your go-to destination for Burmese content.",
  openGraph: {
    title: "MMXX - Myanmar Video Entertainment",
    description: "Watch and download quality Myanmar entertainment videos.",
    type: "website",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
};

export const viewport: Viewport = {
  themeColor: "#C04F6C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
