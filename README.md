# 노쇼 없는 미용실 - 랜딩페이지

미용실의 예약 관리 문제를 해결하는 자동 리마인드·노쇼 관리 SaaS의 공식 랜딩페이지입니다.

## 기술 스택

- **프레임워크**: Next.js 16.1.6
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 4
- **배포**: Vercel

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
└── components/
    ├── Header.tsx          # Navigation header
    ├── Hero.tsx            # Hero section
    ├── Problem.tsx         # Problem statement section
    ├── Solution.tsx        # Features/solution section
    ├── HowItWorks.tsx      # Step-by-step guide
    ├── Benefits.tsx        # Benefits section
    ├── CTA.tsx             # Call-to-action section
    ├── EmailForm.tsx       # Email signup form
    └── Footer.tsx          # Footer
```

## 로컬 개발

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어주세요.

### 빌드

```bash
npm run build
npm start
```

## 기능

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🎨 modern blue/purple 그래디언트 테마
- ✉️ 이메일 가입 폼
- 📊 4단계 솔루션 안내
- 🔍 SEO 최적화
- ⚡ 빠른 로딩 속도

## 배포 (Vercel) ✅

### 현재 배포 상태
- **Production URL**: https://noshowhair.com
- **Preview URL**: https://haircut-landing.vercel.app
- **배포 상태**: ✅ LIVE
- **Git**: https://github.com/kirin765/haircut-landing

### 배포 내용
✅ Google Analytics 4 - Conversion Tracking 활성화
✅ Vercel Analytics - Real-time 모니터링
✅ SEO 최적화 - robots.txt, sitemap.xml
✅ 구조화된 데이터 - Schema.org JSON-LD
✅ Naver 검색 - 인증 meta tag 설정
✅ 커스텀 도메인 - noshowhair.com 연결

### 로컬에서 배포
GitHub 저장소를 Vercel에 연결하면 자동으로 배포됩니다.
또는 수동 배포:
```bash
vercel
```

## 이메일 폼 연동

현재 EmailForm 컴포넌트는 로컬 상태만 관리하고 있습니다. 실제 이메일 서비스와 연동하려면:

1. Resend, SendGrid, Mailgun 등의 이메일 서비스에 가입
2. `src/app/api/subscribe/route.ts` API 엔드포인트 생성
3. `src/components/EmailForm.tsx`의 `handleSubmit` 함수 수정

예시:
```typescript
const response = await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

## 커스터마이제이션

### 색상 변경

`tailwind.config.ts`의 `theme.extend.colors` 섹션에서 색상을 수정하세요.

### 콘텐츠 수정

각 컴포넌트 파일에서 텍스트, 제목, 설명을 수정하세요.

### 메타데이터

`src/app/layout.tsx`에서 SEO 메타데이터를 수정하세요.

## 모니터링 & 분석

### Google Analytics
- **Dashboard**: https://analytics.google.com
- **Conversion Events**:
  - `pricing_plan_clicked` - 요금제 클릭
  - `email_signup_submitted` - 이메일 가입
  - `hero_cta_clicked` - Hero CTA 클릭
- **Funnel Analysis**: GA Dashboard → Explore → Funnel Exploration

### Vercel Analytics
- **Dashboard**: https://vercel.com/dashboard
- **Metrics**: Core Web Vitals, Page Performance, Real-time Users

### SEO 모니터링
- **Google Search Console**: https://search.google.com/search-console
- **Naver Search Advisor**: https://searchadvisor.naver.com
- **Sitemap**: https://noshowhair.com/sitemap.xml
- **Robots.txt**: https://noshowhair.com/robots.txt

## 라이센스

MIT

## 연락처

- 📧 Email: hello@no-show-hair.com
- 🌐 Website: https://noshowhair.com
- 💬 KakaoTalk: (카카오톡 채널)
