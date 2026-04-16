'use client';

import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share?: {
        sendDefault: (options: unknown) => void;
      };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

const SHARE_URL = 'https://noshowhair.com';
const SHARE_TITLE = '노쇼 없는 미용실 - 자동 예약 리마인드 서비스';
const SHARE_TEXT =
  '카카오톡·문자 자동 리마인드로 미용실 노쇼를 방지하세요. 월 매출 300만원 손실을 막는 가장 쉬운 방법!';
const SHARE_IMAGE = 'https://noshowhair.com/og-image.png';

const ENCODED_URL = encodeURIComponent(SHARE_URL);
const ENCODED_TEXT = encodeURIComponent(`${SHARE_TITLE}\n${SHARE_TEXT}`);

const FACEBOOK_URL = `https://www.facebook.com/sharer/sharer.php?u=${ENCODED_URL}`;
const TWITTER_URL = `https://twitter.com/intent/tweet?url=${ENCODED_URL}&text=${encodeURIComponent(SHARE_TITLE)}`;
const LINE_URL = `https://social-plugins.line.me/lineit/share?url=${ENCODED_URL}&text=${ENCODED_TEXT}`;

function trackShare(channel: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'share', {
      method: channel,
      content_type: 'landing_page',
      item_id: 'noshowhair_home',
    });
  }
}

function openPopup(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer,width=600,height=700');
}

type Variant = 'light' | 'dark';

interface ShareButtonsProps {
  variant?: Variant;
  onToast?: (message: string) => void;
}

export default function ShareButtons({
  variant = 'light',
  onToast,
}: ShareButtonsProps) {
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      setCanNativeShare(true);
    }
  }, []);

  const initKakao = useCallback(() => {
    const appKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    if (!appKey) return;
    if (typeof window === 'undefined' || !window.Kakao) return;
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(appKey);
    }
    setKakaoReady(true);
  }, []);

  const handleKakao = useCallback(() => {
    trackShare('kakao');
    if (kakaoReady && window.Kakao?.Share) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: SHARE_TITLE,
          description: SHARE_TEXT,
          imageUrl: SHARE_IMAGE,
          link: { mobileWebUrl: SHARE_URL, webUrl: SHARE_URL },
        },
        buttons: [
          {
            title: '사이트 방문하기',
            link: { mobileWebUrl: SHARE_URL, webUrl: SHARE_URL },
          },
        ],
      });
    } else {
      // SDK 미설정 시 링크 복사로 대체
      navigator.clipboard
        .writeText(`${SHARE_TITLE}\n${SHARE_URL}`)
        .then(() => onToast?.('카카오톡에 붙여넣을 링크를 복사했어요!'))
        .catch(() => onToast?.('링크 복사에 실패했어요.'));
    }
  }, [kakaoReady, onToast]);

  const handleFacebook = useCallback(() => {
    trackShare('facebook');
    openPopup(FACEBOOK_URL);
  }, []);

  const handleTwitter = useCallback(() => {
    trackShare('twitter');
    openPopup(TWITTER_URL);
  }, []);

  const handleLine = useCallback(() => {
    trackShare('line');
    openPopup(LINE_URL);
  }, []);

  const handleInstagram = useCallback(() => {
    trackShare('instagram');
    navigator.clipboard
      .writeText(SHARE_URL)
      .then(() =>
        onToast?.('링크를 복사했어요! 인스타그램 스토리·DM에 붙여넣어 공유하세요.'),
      )
      .catch(() => onToast?.('링크 복사에 실패했어요.'));
  }, [onToast]);

  const handleCopy = useCallback(() => {
    trackShare('copy_link');
    navigator.clipboard
      .writeText(SHARE_URL)
      .then(() => onToast?.('링크를 복사했어요!'))
      .catch(() => onToast?.('링크 복사에 실패했어요.'));
  }, [onToast]);

  const handleNativeShare = useCallback(async () => {
    trackShare('native');
    try {
      await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL });
    } catch {
      // 사용자가 취소한 경우 무시
    }
  }, []);

  const btnBase =
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const btnStyle =
    variant === 'dark'
      ? 'bg-gray-800 text-gray-100 hover:bg-gray-700 focus:ring-gray-500'
      : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus:ring-gray-300';

  return (
    <>
      {process.env.NEXT_PUBLIC_KAKAO_APP_KEY ? (
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          strategy="afterInteractive"
          integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
          crossOrigin="anonymous"
          onLoad={initKakao}
        />
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`mr-1 text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
        >
          공유하기
        </span>

        <button
          type="button"
          onClick={handleKakao}
          aria-label="카카오톡으로 공유"
          className={`${btnBase} bg-[#FEE500] text-[#191919] hover:brightness-95 focus:ring-yellow-400`}
        >
          <span aria-hidden>💬</span>
          <span>카카오톡</span>
        </button>

        <button
          type="button"
          onClick={handleInstagram}
          aria-label="인스타그램 공유 링크 복사"
          className={`${btnBase} bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:brightness-95 focus:ring-pink-400`}
        >
          <span aria-hidden>📸</span>
          <span>인스타그램</span>
        </button>

        <button
          type="button"
          onClick={handleFacebook}
          aria-label="페이스북으로 공유"
          className={`${btnBase} bg-[#1877F2] text-white hover:brightness-95 focus:ring-blue-400`}
        >
          <span aria-hidden>f</span>
          <span>페이스북</span>
        </button>

        <button
          type="button"
          onClick={handleTwitter}
          aria-label="X(트위터)로 공유"
          className={`${btnBase} bg-black text-white hover:brightness-110 focus:ring-gray-500`}
        >
          <span aria-hidden>𝕏</span>
          <span>X</span>
        </button>

        <button
          type="button"
          onClick={handleLine}
          aria-label="라인으로 공유"
          className={`${btnBase} bg-[#06C755] text-white hover:brightness-95 focus:ring-green-400`}
        >
          <span aria-hidden>💚</span>
          <span>라인</span>
        </button>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="링크 복사"
          className={`${btnBase} ${btnStyle}`}
        >
          <span aria-hidden>🔗</span>
          <span>링크 복사</span>
        </button>

        {canNativeShare ? (
          <button
            type="button"
            onClick={handleNativeShare}
            aria-label="다른 앱으로 공유"
            className={`${btnBase} ${btnStyle}`}
          >
            <span aria-hidden>↗</span>
            <span>더보기</span>
          </button>
        ) : null}
      </div>
    </>
  );
}
