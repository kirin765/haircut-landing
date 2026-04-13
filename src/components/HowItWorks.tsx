export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            작은 살롱에 맞춘 도입 방식
          </h2>
          <p className="text-lg text-gray-600">
            복잡한 최적화 엔진 대신 가장 필요한 운영 루프부터 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              step: "1단계",
              title: "예약표 연결",
              description: "지금 쓰는 예약표를 유지한 채 디자이너와 메뉴 정보만 붙입니다.",
              action: "기존 시스템 유지",
            },
            {
              step: "2단계",
              title: "시술시간 기록",
              description: "시작·종료 버튼만 눌러 실제 소요시간 데이터를 쌓습니다.",
              action: "현장 기록 중심",
            },
            {
              step: "3단계",
              title: "권장 간격 반영",
              description: "평균과 편차를 바탕으로 다음 예약 간격과 위험 슬롯을 제안받습니다.",
              action: "바로 운영 반영",
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
          <div className="p-8 md:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 mb-3">MVP 범위</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                자동 최적화 엔진 전 단계까지만 정확하게 만듭니다
              </h3>
              <p className="text-gray-600 mb-6">
                첫 버전은 추천과 경고에 집중합니다. 완전 자동 배치 최적화까지 가지 않아도,
                실제 기록만 쌓이면 예약 간격 품질은 바로 개선됩니다.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>실제 시작/종료 시각 기록</li>
                <li>디자이너별·시술별 평균시간 계산</li>
                <li>최근 데이터 기준 권장 예약 간격 제안</li>
                <li>밀림 가능성이 높은 슬롯 표시</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-gray-900 text-white p-6">
              <p className="text-sm text-white/60 mb-4">대상 고객</p>
              <p className="text-2xl font-bold mb-4">염색·펌 비중이 높은 소규모 살롱 원장</p>
              <p className="text-white/75 mb-6">
                예약 시스템을 갈아엎을 여력은 없지만, 예약 밀림과 공실을 줄일 근거는 당장 필요한 팀.
              </p>
              <div className="space-y-3 text-sm text-white/80">
                <p>검색 수요는 있으나 CRM/엑셀 카테고리에 흡수돼 있음</p>
                <p>공공데이터로 초기 타겟 상권 세그먼트 검증 가능</p>
                <p>초기 포지셔닝은 고객관리보다 운영 정확도 개선에 집중</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
