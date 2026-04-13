import EmailForm from './EmailForm';

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          예약이 덜 밀리는 살롱 운영,<br />
          지금 먼저 잡아두세요
        </h2>
        <p className="text-lg sm:text-xl mb-12 text-white/90">
          자동 리마인드와 시술시간 기반 예약 간격 추천을 함께 준비하고 있습니다.
          <br className="hidden sm:block" />
          출시 전에 관심 살롱을 먼저 모아 실제 운영 흐름부터 맞출 예정입니다.
        </p>

        <div
          id="email-signup"
          className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-8 sm:p-12 mb-12"
        >
          <EmailForm />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-left">
            <p className="text-white/80 text-sm mb-2">💳 비용</p>
            <p className="font-semibold">초기 파일럿 가격 제공</p>
          </div>
          <div className="text-left">
            <p className="text-white/80 text-sm mb-2">🚀 도입 방식</p>
            <p className="font-semibold">기존 예약 시스템 유지</p>
          </div>
          <div className="text-left">
            <p className="text-white/80 text-sm mb-2">📞 대상</p>
            <p className="font-semibold">소규모 살롱 원장 우선</p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-white/70 text-sm">
            더 궁금한 점이 있으신가요? 📧 support@reviewboost.co.kr 으로 문의주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
