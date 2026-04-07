import EmailForm from './EmailForm';

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          미용실의 미래,<br />
          지금 시작하세요
        </h2>
        <p className="text-lg sm:text-xl mb-12 text-white/90">
          복잡한 설정 없이 오늘부터 자동 리마인드를 시작할 수 있습니다.
          <br className="hidden sm:block" />
          매달 300만원 손실을 멈추는 가장 간단한 방법입니다.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 sm:p-12 mb-12">
          <EmailForm />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-left">
            <p className="text-white/80 text-sm mb-2">💳 비용</p>
            <p className="font-semibold">무료 체험 후 결정</p>
          </div>
          <div className="text-left">
            <p className="text-white/80 text-sm mb-2">🚀 구축 시간</p>
            <p className="font-semibold">5분 이내 시작</p>
          </div>
          <div className="text-left">
            <p className="text-white/80 text-sm mb-2">📞 지원</p>
            <p className="font-semibold">한국어 고객 지원</p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-white/70 text-sm">
            더 궁금한 점이 있으신가요? 📧 hello@no-show-hair.com 으로 문의주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
