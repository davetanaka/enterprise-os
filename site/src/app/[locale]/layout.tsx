import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SocialShare from "@/components/ui/SocialShare";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enterprise-os.davetanaka.net"),
  title: "Enterprise OS - AI-Powered Knowledge Management",
  description:
    "Using GitHub Enterprise as a version-controlled knowledge operating system for the AI era. Why Your Enterprise AI Is Failing — and How to Fix It.",
  keywords: ["Enterprise AI", "Knowledge Management", "GitHub Enterprise", "Digital Transformation", "AI Strategy", "Enterprise OS"],
  authors: [{ name: "Dave Tanaka / 田中訓", url: "https://github.com/davetanaka" }],
  creator: "Dave Tanaka",
  openGraph: {
    title: "Enterprise OS",
    description:
      "It's Not the AI You're Missing. It's the OS. Version-controlled knowledge for the AI era.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ja_JP",
    siteName: "Enterprise OS",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enterprise OS - The Operating System for Corporate Knowledge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise OS",
    description: "It's Not the AI You're Missing. It's the OS.",
    creator: "@davetanaka",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          {children}
          <BackToTop />
          <SocialShare />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
