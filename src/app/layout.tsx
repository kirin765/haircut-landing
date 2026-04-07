import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "노쇼 없는 미용실 - 자동 예약 리마인드 서비스",
  description: "미용실의 예약 관리 문제를 해결하는 자동 리마인드·노쇼 관리 SaaS. 카카오톡, 문자 자동 발송으로 매출 손실을 줄이세요.",
  keywords: "미용실 예약, 노쇼 방지, 예약 리마인드, 자동 확인, 미용실 SaaS, 미용실 관리 솔루션",
  authors: [
    {
      name: "Haircut Landing Team",
      url: "https://noshowhair.com",
    },
  ],
  creator: "Haircut Landing Team",
  robots: "index, follow",
  canonical: "https://noshowhair.com",
  alternates: {
    languages: {
      en: "https://noshowhair.com/en",
      ko: "https://noshowhair.com",
    },
  },
  openGraph: {
    title: "노쇼 없는 미용실",
    description: "미용실 예약 관리의 모든 것을 자동화하세요.",
    url: "https://noshowhair.com",
    siteName: "노쇼 없는 미용실",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://noshowhair.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "노쇼 없는 미용실 - 미용실 예약 관리 SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "노쇼 없는 미용실",
    description: "미용실 예약 관리의 모든 것을 자동화하세요.",
    images: ["https://noshowhair.com/og-image.png"],
  },
  other: {
    "naver-site-verification": "f4396b866197cd45412d09973db8cca2573ea0c8",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
        <StructuredData />
      </head>
      <body className="bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
