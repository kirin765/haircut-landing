import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://noshowhair.com"),
  title: {
    default: "노쇼 없는 미용실 | 미용실 예약 리마인드·시술시간 기록·예약 간격 추천",
    template: "%s | 노쇼 없는 미용실",
  },
  description:
    "소규모 미용실을 위한 예약 운영 도구. 자동 예약 리마인드로 노쇼를 줄이고, 디자이너별 실제 시술시간 기록으로 메뉴별 권장 예약 간격과 밀림 위험 슬롯을 제안합니다.",
  applicationName: "노쇼 없는 미용실",
  keywords: [
    "미용실 예약 관리",
    "노쇼 방지",
    "예약 리마인드",
    "미용실 노쇼",
    "미용실 시술시간 기록",
    "미용실 예약 간격",
    "디자이너별 시술시간",
    "미용실 운영 관리",
    "미용실 예약 최적화",
    "미용실 지연 관리",
    "미용실 공실 관리",
    "헤어샵 시술시간 관리",
    "카카오톡 알림톡",
    "미용실 SaaS",
    "헤어샵 예약",
    "미용실 관리 프로그램",
    "예약 자동 확인",
    "뷰티샵 예약 시스템",
    "미용실 고객 관리",
  ],
  authors: [{ name: "노쇼 없는 미용실", url: "https://noshowhair.com" }],
  creator: "노쇼 없는 미용실",
  publisher: "노쇼 없는 미용실",
  category: "Business Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://noshowhair.com",
    languages: {
      "ko-KR": "https://noshowhair.com",
      "x-default": "https://noshowhair.com",
    },
  },
  openGraph: {
    title: "노쇼 없는 미용실 | 예약 리마인드·시술시간 기록·예약 간격 추천",
    description:
      "기존 예약 시스템은 그대로 두고, 노쇼 방지와 디자이너별 시술시간 기반 예약 운영을 함께 개선하세요.",
    url: "https://noshowhair.com",
    siteName: "노쇼 없는 미용실",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "노쇼 없는 미용실 - 미용실 예약 운영 최적화 도구",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "노쇼 없는 미용실 | 미용실 예약 운영 최적화",
    description:
      "노쇼 방지와 시술시간 기반 예약 간격 추천을 함께 제공하는 소규모 미용실용 운영 도구.",
    images: ["/og-image.png"],
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
