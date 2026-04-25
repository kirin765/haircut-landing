'use client';

declare let gtag: Function;

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHeroCTA = (action: string) => {
    gtag('event', 'hero_cta_clicked', {
      action: action,
      location: 'hero_section',
    });

    if (action === 'signup') {
      handleScroll('email-signup');
    } else {
      handleScroll('features');
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base tracking-[0.18em] text-white/70 mb-4">
          살롱 운영 보조 도구 · 기존 예약앱 유지
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          네이버·카카오 예약은 그대로,<br />예약 간격만 데이터로 바로잡습니다
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-white/90">
          디자이너별 실제 시술시간을 쌓아 다음 예약 간격을 자동 추천하고,
          <br className="hidden sm:block" />
          노쇼 리마인드부터 밀림 위험 사전 경고까지 한 화면에서 관리합니다.
          <span className="text-sm sm:text-base text-white/80 block mt-3">
            예약 시스템 교체 없이 바로 붙여 쓰는 운영 보조 도구입니다.
          </span>
        </p>
        <p className="text-sm sm:text-base text-white/75 mb-6">
          미용실 노쇼 방지 · 예약 리마인드 · 시술시간 기록 · 예약 간격 추천 · 디자이너별 평균시간
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleHeroCTA('signup')}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg"
          >
            얼리버드 30% 할인 사전예약
          </button>
          <button
            onClick={() => handleHeroCTA('learn_more')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            기능 보기
          </button>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 text-left">
          <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/65 mb-4">핵심 워크플로우</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="font-semibold mb-2">1. 시술 종료 기록</p>
                <p className="text-white/75">실제 시작·종료 시각을 디자이너와 메뉴 기준으로 저장</p>
              </div>
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="font-semibold mb-2">2. 평균·편차 계산</p>
                <p className="text-white/75">최근 5~20건 기준으로 개인별 실제 소요시간을 자동 업데이트</p>
              </div>
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="font-semibold mb-2">3. 권장 간격 제안</p>
                <p className="text-white/75">커트·염색·펌별로 다음 예약을 얼마나 잡아야 하는지 추천</p>
              </div>
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="font-semibold mb-2">4. 밀림 위험 표시</p>
                <p className="text-white/75">지연 가능성이 높은 슬롯을 미리 보여줘 연쇄 대기를 예방</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-black/15 p-8">
            <p className="text-sm text-white/70 mb-6">
              검색어와 제품 메시지를 같은 단어로 맞췄습니다.
            </p>
            <div className="space-y-3 text-sm sm:text-base text-white/80">
              <p>미용실 예약 관리 프로그램</p>
              <p>헤어샵 노쇼 방지</p>
              <p>시술시간 기록 기반 예약 간격 추천</p>
              <p>디자이너별 평균시간과 편차 계산</p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="text-2xl font-bold">기존</p>
                <p className="text-white/70 text-xs mt-1">예약 시스템 유지</p>
              </div>
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="text-2xl font-bold">실제</p>
                <p className="text-white/70 text-xs mt-1">현장 시간 기록</p>
              </div>
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="text-2xl font-bold">추천</p>
                <p className="text-white/70 text-xs mt-1">다음 간격 제안</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-white/20">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">노쇼</div>
              <div className="text-white/70 text-sm">예약 리마인드로 감소</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">지연</div>
              <div className="text-white/70 text-sm">실제 시술시간 기반으로 완화</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">공실</div>
              <div className="text-white/70 text-sm">예약 간격 추천으로 축소</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
