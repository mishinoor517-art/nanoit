import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://promofusion.agency"),
  title: {
    default: "PromoFusion — IT & Digital Agency | Web, Marketing & AI Solutions",
    template: "%s | PromoFusion",
  },
  description:
    "PromoFusion is a full-service IT & digital agency helping businesses grow online through digital marketing, social media, YouTube automation, AI video generation, Meta ads, and web development.",
  keywords: [
    "IT agency",
    "digital marketing agency",
    "web development",
    "AI video generation",
    "Meta ads agency",
    "YouTube automation",
    "social media marketing",
  ],
  openGraph: {
    title: "PromoFusion — IT & Digital Agency",
    description:
      "We build brands, grow businesses, and create impact through modern technology and creative strategy.",
    url: "https://promofusion.agency",
    siteName: "PromoFusion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromoFusion — IT & Digital Agency",
    description:
      "We build brands, grow businesses, and create impact through modern technology and creative strategy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
