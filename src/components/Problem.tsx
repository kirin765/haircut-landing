export default function Problem() {
  const problems = [
    {
      icon: "⏱️",
      title: "디자이너마다 실제 소요시간이 다릅니다",
      description: "같은 염색·펌이어도 사람마다 걸리는 시간이 달라 예약 간격이 자꾸 어긋납니다.",
    },
    {
      icon: "🔁",
      title: "한 번 밀리면 다음 예약까지 연쇄 지연됩니다",
      description: "대기, 컴플레인, 공실이 한 날에 같이 생기는데도 원인은 감으로만 관리되고 있습니다.",
    },
    {
      icon: "📱",
      title: "노쇼 관리도 여전히 수동입니다",
      description: "카카오톡·전화로 예약 확인을 반복하느라 운영 시간이 빠져나가고 당일 공백이 생깁니다.",
    },
    {
      icon: "📊",
      title: "기록은 있는데 운영 기준이 없습니다",
      description: "시술 종료 시각을 체계적으로 쌓지 못해 다음 예약을 몇 분으로 잡아야 하는지 표준이 없습니다.",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            미용실 예약 관리가 흔들릴 때 생기는 문제
          </h2>
          <p className="text-lg text-gray-600">
            노쇼만의 문제가 아니라 예약 간격이 틀어지는 운영 문제가 반복됩니다.
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

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <div className="text-center">
              <p className="text-red-800 font-semibold mb-2">
                🚨 노쇼와 당일 취소는 여전히 직접 막아야 합니다
              </p>
              <p className="text-red-700 text-sm">
                예약 리마인드가 없으면 당일 공백이 생기고, 대응은 직원마다 달라집니다.
              </p>
              <p className="text-red-700 text-lg font-bold mt-2">
                손실은 매출뿐 아니라 스케줄 신뢰도까지 깎아먹습니다
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <div className="text-center">
              <p className="text-amber-900 font-semibold mb-2">
                ⚠️ 예약 간격을 감으로 잡으면 연쇄 지연이 반복됩니다
              </p>
              <p className="text-amber-800 text-sm">
                특히 염색·펌 비중이 높은 소규모 살롱일수록 실제 소요시간 편차가 큽니다.
              </p>
              <p className="text-amber-900 text-lg font-bold mt-2">
                필요한 건 새 예약앱이 아니라 실제 시간 데이터를 반영한 운영 기준입니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
