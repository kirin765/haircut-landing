export default function Solution() {
  const features = [
    {
      number: "1",
      title: "기존 예약을 그대로 가져옵니다",
      description: "예약 시스템을 바꾸지 않고 CSV 업로드나 수기 입력으로 일정만 연결합니다.",
      points: ["고객 이름", "예약 시간", "시술 종류", "디자이너", "연락처"],
      icon: "📋",
    },
    {
      number: "2",
      title: "실제 시작·종료 시각을 기록합니다",
      description: "시술이 끝날 때만 눌러도 디자이너별·메뉴별 실제 소요시간이 쌓입니다.",
      points: ["시작 시각", "종료 시각", "담당 디자이너", "커트·염색·펌 메뉴"],
      icon: "⏱️",
    },
    {
      number: "3",
      title: "개인별 평균시간과 편차를 계산합니다",
      description: "최근 5~20건만으로도 디자이너별 실제 패턴을 반영한 운영 기준을 만듭니다.",
      points: ["최근 데이터 반영", "평균 소요시간", "편차 계산", "메뉴별 분리 집계"],
      icon: "📊",
    },
    {
      number: "4",
      title: "권장 예약 간격과 밀림 위험을 보여줍니다",
      description: "다음 예약을 몇 분 간격으로 잡아야 하는지 추천하고 위험 슬롯을 미리 표시합니다.",
      points: ["권장 예약 간격", "지연 위험 슬롯", "노쇼 리마인드", "당일 취소 기록"],
      icon: "🚦",
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
            노쇼 관리와 시술시간 기반 예약 운영을 한 흐름으로 묶습니다.
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
              <div className="text-4xl font-bold text-purple-600 mb-2">MVP</div>
              <p className="text-gray-700">기록 → 계산 → 추천에 집중</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5~20건</div>
              <p className="text-gray-700">최근 기록으로 빠르게 기준 생성</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">기존 예약앱</div>
              <p className="text-gray-700">대체 없이 함께 사용 가능</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
