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
        <p className="text-sm sm:text-base uppercase tracking-[0.24em] text-white/70 mb-4">
          Salon Operations Copilot
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          노쇼와 연쇄 지연을<br />같이 줄이는 미용실 운영 도구
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-white/90">
          자동 예약 리마인드로 노쇼를 줄이고, 디자이너별 실제 시술시간 기록으로
          <br className="hidden sm:block" />
          다음 예약 간격까지 더 정확하게 추천합니다.
          <span className="text-sm sm:text-base text-white/80 block mt-3">
            첫 제품은 기존 예약 시스템을 바꾸지 않고, 종료 시각 기록과 권장 간격 제안부터 시작합니다.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleHeroCTA('signup')}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg"
          >
            사전 등록하기
          </button>
          <button
            onClick={() => handleHeroCTA('learn_more')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            기능 보기
          </button>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1.3fr_1fr] gap-6 text-left">
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
            <p className="text-sm text-white/70 mb-8">
              운영 문제는 이미 검색되고 있습니다.
              <br />
              이제 포지셔닝만 더 날카롭게 만들면 됩니다.
            </p>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold">1,210</div>
                <div className="text-white/70 text-sm">추정 평균 월간 검색량</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1.15M+</div>
                <div className="text-white/70 text-sm">관련 웹검색 결과 규모</div>
              </div>
              <div>
                <div className="text-3xl font-bold">195,000원</div>
                <div className="text-white/70 text-sm">확인된 유사 솔루션 월 가격 중심대</div>
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
