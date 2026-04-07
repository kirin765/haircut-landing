import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "노쇼 없는 미용실 - 자동 예약 리마인드 서비스",
  description: "미용실의 예약 관리 문제를 해결하는 자동 리마인드·노쇼 관리 SaaS. 카카오톡, 문자 자동 발송으로 매출 손실을 줄이세요.",
  keywords: "미용실 예약, 노쇼 방지, 예약 리마인드, 자동 확인, 미용실 SaaS",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "노쇼 없는 미용실",
    description: "미용실 예약 관리의 모든 것을 자동화하세요.",
    type: "website",
  },
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
      </head>
      <body className="bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
