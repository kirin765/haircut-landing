export default function Problem() {
  const problems = [
    {
      icon: "📱",
      title: "수동 확인의 반복",
      description: "카카오톡·전화로 일일이 예약 확인을 하느라 시간이 부족합니다.",
    },
    {
      icon: "💸",
      title: "노쇼로 인한 손실",
      description: "안내 없이 오지 않은 고객으로 인해 매달 수백만 원이 손실됩니다.",
    },
    {
      icon: "😵",
      title: "직원마다 다른 대응",
      description: "노쇼 정책이 일관되지 않아 고객 불만과 운영 혼선이 반복됩니다.",
    },
    {
      icon: "🔄",
      title: "관리 시스템 부재",
      description: "당일취소와 노쇼 기록이 산발적으로 관리되어 데이터 추적이 어렵습니다.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            소규모 미용실이 겪는 현실
          </h2>
          <p className="text-lg text-gray-600">
            매일 반복되는 예약 관리 문제, 이제 그만하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-8">
          <div className="text-center">
            <p className="text-red-800 font-semibold mb-2">
              🚨 예약 리마인드 없이 하루 3명 ~ 5명이 노쇼합니다
            </p>
            <p className="text-red-700 text-sm">
              시술 가격이 30,000원이라면, 하루 90,000 ~ 150,000원의 손실
            </p>
            <p className="text-red-700 text-lg font-bold mt-2">
              월단위로는 약 200만 ~ 300만 원입니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
