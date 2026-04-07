export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            3분 안에 시작하는 방법
          </h2>
          <p className="text-lg text-gray-600">
            복잡한 설정 없이 바로 사용할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              step: "1단계",
              title: "가입하기",
              description: "이메일로 간단히 가입하고 기본 정보를 입력합니다.",
              action: "3분 소요",
            },
            {
              step: "2단계",
              title: "예약 등록",
              description: "CSV 파일을 업로드하거나 예약 정보를 입력합니다.",
              action: "5분 소요",
            },
            {
              step: "3단계",
              title: "자동 실행",
              description: "설정된 시간에 자동으로 리마인드가 발송됩니다.",
              action: "자동 진행",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero text-white rounded-full font-bold text-xl mb-4">
                {index + 1}
              </div>
              <p className="text-sm font-semibold text-purple-600 mb-2">{item.step}</p>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-sm text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full">
                {item.action}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-gray-500">대시보드 미리보기</p>
              <p className="text-sm text-gray-400 mt-2">
                (동영상 튜토리얼은 가입 후 확인 가능합니다)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
