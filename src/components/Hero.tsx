'use client';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          노쇼 없는<br />미용실이 되세요
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-white/90">
          자동 예약 리마인드와 노쇼 관리로 매달 몇백만 원의 손실을 줄이세요.
          <br />
          <span className="text-sm sm:text-base text-white/80 block mt-2">
            CSV 업로드부터 자동 문자·카카오톡 발송까지 5분이면 끝
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll('cta')}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg"
          >
            무료로 시작하기
          </button>
          <button
            onClick={() => handleScroll('features')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            자세히 알아보기
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-sm text-white/70 mb-8">
            이미 미용실 100개 이상이 사용 중입니다
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-white/70 text-sm">미용실 이용 중</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">85%</div>
              <div className="text-white/70 text-sm">노쇼 감소율</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">월 400만</div>
              <div className="text-white/70 text-sm">평균 매출 증대</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
