export default function Benefits() {
  const benefits = [
    {
      icon: "📈",
      title: "매출 증대",
      description: "노쇼 감소로 월평균 300만원 이상의 추가 매출을 기대하세요.",
    },
    {
      icon: "⏱️",
      title: "시간 절약",
      description: "매일 1~2시간의 수동 확인 시간을 완전히 없앨 수 있습니다.",
    },
    {
      icon: "😊",
      title: "고객 만족도 향상",
      description: "자동 리마인드로 고객이 예약을 잊지 않도록 도와줍니다.",
    },
    {
      icon: "🔄",
      title: "일관된 운영",
      description: "모든 직원이 동일한 정책으로 일관되게 대응할 수 있습니다.",
    },
    {
      icon: "📊",
      title: "데이터 기반 운영",
      description: "노쇼·당일취소 패턴을 분석하여 정책을 최적화하세요.",
    },
    {
      icon: "🔐",
      title: "안심하고 사용",
      description: "고객 정보는 암호화되어 안전하게 보호됩니다.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            도입 시 얻을 수 있는 이점
          </h2>
          <p className="text-lg text-gray-600">
            지금 바로 시작해서 변화를 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition bg-white"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            지금 시작하면 어떤 변화가 올까요?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            매달 300만원 손실, 매일 2시간 낭비하는 현실에서 벗어나세요.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
            지금 무료로 시작하기
          </button>
        </div>
      </div>
    </section>
  );
}
