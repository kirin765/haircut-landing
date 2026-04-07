# 분석 도구 설정 가이드

이 프로젝트에는 Google Analytics와 Vercel Analytics가 모두 통합되어 있습니다.

## 📊 Vercel Analytics (자동)

Vercel Analytics는 배포하면 자동으로 활성화됩니다. 추가 설정이 필요하지 않습니다.

### 데이터 확인
1. [Vercel Dashboard](https://vercel.com/dashboard)에 로그인
2. 프로젝트 선택
3. "Analytics" 탭 클릭
4. 방문자 수, 페이지 뷰, 핵심 성능 지표 등을 실시간으로 확인

### 추적되는 지표
- **Web Vitals**: Core Web Vitals (LCP, FID, CLS)
- **Page Analytics**: 페이지별 방문자 수
- **Edge Middleware**: API 응답 시간
- **Serverless Functions**: 함수 실행 시간

---

## 🔍 Google Analytics 4 설정

### 1단계: Google Analytics 4 계정 생성

1. [Google Analytics](https://analytics.google.com)에 접속
2. **시작하기** 또는 **+새로 만들기** 클릭
3. 다음 정보 입력:
   - **계정 이름**: "노쇼 없는 미용실"
   - **데이터 스트림**: 웹 선택
   - **웹사이트 URL**: `https://your-domain.vercel.app`
   - **스트림 이름**: "Haircut Landing Page"

### 2단계: Measurement ID 찾기

1. 생성 후 **웹 스트림 선택**
2. **웹 스트림 세부정보** 클릭
3. **Measurement ID** 복사 (형식: `G-XXXXXXXXXX`)

### 3단계: 환경 변수 설정

#### 로컬 개발 환경
`.env.local` 파일 생성:
```bash
NEXT_PUBLIC_GA_ID=G-YOUR_MEASUREMENT_ID
```

#### Vercel 프로덕션 환경
1. [Vercel Dashboard](https://vercel.com) 로그인
2. 프로젝트 선택
3. **Settings** → **Environment Variables**
4. 새 변수 추가:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-YOUR_MEASUREMENT_ID`
   - **Environments**: Production, Preview, Development 모두 선택
5. **Save** 클릭

### 4단계: 확인 (로컬)

```bash
npm run dev
```

브라우저 개발자 도구에서:
1. **Console** 탭 열기
2. 다음 명령어 입력:
   ```javascript
   window.dataLayer
   ```
3. Google Analytics 이벤트가 배열에 보이는지 확인

### 5단계: 배포 및 확인

1. 변경사항 커밋:
   ```bash
   git add .
   git commit -m "Add Google Analytics and Vercel Analytics"
   git push
   ```

2. Vercel 자동 배포 완료 대기

3. Google Analytics에서 데이터 확인:
   - [Google Analytics Dashboard](https://analytics.google.com)
   - 프로젝트 선택
   - **홈** 또는 **보고서** 탭에서 실시간 방문자 확인 (배포 후 1-2분)

---

## 📈 추적 이벤트

### 자동 추적되는 이벤트
- **page_view**: 페이지 방문
- **session_start**: 세션 시작
- **scroll**: 스크롤 이벤트

### 커스텀 이벤트 추가 (선택사항)

`src/components/EmailForm.tsx`에 커스텀 이벤트 추가:

```typescript
'use client';

import { useState } from 'react';

declare let gtag: Function;

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }

    // Google Analytics 이벤트 기록
    gtag('event', 'email_signup', {
      email_domain: email.split('@')[1],
    });

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // ... rest of component
}
```

그 후 Google Analytics에서 **이벤트** → **email_signup**으로 조회 가능합니다.

---

## 🎯 주요 대시보드 보기

### Vercel Analytics
- **Real-time Users**: 실시간 방문자 수
- **Web Vitals**: 성능 지표
- **Geographic Data**: 지역별 방문자

### Google Analytics 4
- **실시간 보고서**: 현재 활동 중인 사용자
- **획득**: 어디에서 방문자가 왔는지
- **참여도**: 사용자 행동 (클릭, 스크롤 등)
- **전환**: 이메일 가입 등 목표 달성
- **사용자**: 사용자 특성 및 행동

---

## 🔒 데이터 프라이버시

- Google Analytics는 쿠키를 사용합니다
- GDPR 준수를 위해 쿠키 동의 배너 추가 권장
- 개인정보처리방침에 Google Analytics 사용 명시

---

## 📝 체크리스트

- [ ] Google Analytics 4 계정 생성
- [ ] Measurement ID 복사
- [ ] `.env.local` 파일에 ID 추가 (로컬 테스트)
- [ ] Vercel Environment Variables 설정
- [ ] 변경사항 커밋 및 푸시
- [ ] Vercel 배포 완료 대기
- [ ] Google Analytics에서 데이터 확인
- [ ] 커스텀 이벤트 추가 (선택사항)

---

## 문제 해결

### Google Analytics에 데이터가 표시되지 않음
1. Measurement ID가 올바른지 확인
2. 환경 변수가 제대로 설정되었는지 확인
3. 브라우저 개발자 도구 Console에서 오류 확인
4. 배포 후 1-2분 대기 (초기 지연)

### 커스텀 이벤트가 기록되지 않음
1. `gtag` 타입 정의 확인
2. 이벤트 이름에 소문자만 사용
3. Google Analytics 보고서에서 **이벤트 탭** 확인

---

## 참고 자료

- [Google Analytics 4 공식 문서](https://support.google.com/analytics)
- [Vercel Analytics 문서](https://vercel.com/docs/analytics)
- [Next.js Script 컴포넌트](https://nextjs.org/docs/app/api-reference/components/script)
