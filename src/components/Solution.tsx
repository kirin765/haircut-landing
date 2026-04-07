export default function Solution() {
  const features = [
    {
      number: "1",
      title: "예약 정보 입력",
      description: "CSV 파일로 한 번에 업로드하거나 수기로 간단하게 입력하세요.",
      points: ["고객 이름", "예약 시간", "시술 종류", "연락처"],
      icon: "📋",
    },
    {
      number: "2",
      title: "자동 리마인드 발송",
      description: "예약 1일 전과 당일 자동으로 카카오톡·문자가 발송됩니다.",
      points: ["카카오톡 알림톡", "문자 메시지", "시간 자동 조정", "재전송 기능"],
      icon: "💬",
    },
    {
      number: "3",
      title: "확인 상태 수집",
      description: "고객이 간단한 링크로 예약 확인·취소를 응답합니다.",
      points: ["클릭 한 번 확인", "취소 버튼", "실시간 상태 추적", "미확인 고객 리스트"],
      icon: "✅",
    },
    {
      number: "4",
      title: "정책 템플릿 제공",
      description: "노쇼·당일취소 정책을 템플릿으로 제공하고 기록합니다.",
      points: ["정책 문안 템플릿", "자동 기록 시스템", "데이터 분석", "다음 대응"],
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            우리가 제공하는 솔루션
          </h2>
          <p className="text-lg text-gray-600">
            4단계의 간단한 워크플로우로 노쇼 문제를 완벽히 해결하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-hero text-white text-2xl font-bold">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    {feature.number}. {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-20 h-0.5 w-12 bg-gradient-to-r from-purple-600 to-blue-500 opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5분</div>
              <p className="text-gray-700">셋업 완료</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">자동</div>
              <p className="text-gray-700">예약 리마인드</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">실시간</div>
              <p className="text-gray-700">상태 추적</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
