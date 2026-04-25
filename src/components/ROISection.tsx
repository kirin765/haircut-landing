const fitItems = [
  { icon: '✅', text: '염색·펌 비중 60% 이상인 살롱 (시술시간 편차가 가장 큰 메뉴)' },
  { icon: '✅', text: '디자이너 2~5명, 원장이 직접 시술도 하는 소규모 살롱' },
  { icon: '✅', text: '네이버·카카오 예약 사용 중 (교체 없이 바로 추가 가능)' },
  { icon: '✅', text: '주 1회 이상 "오늘 왜 이렇게 밀려?" 경험하는 곳' },
];

const notFitItems = [
  { icon: '—', text: '커트 전문·남성 바버샵 (시술시간 편차 적어 효과 미미)' },
  { icon: '—', text: '이미 전담 운영관리자가 있는 10인 이상 대형 체인' },
  { icon: '—', text: '예약이 거의 없는 워크인 중심 1인샵' },
];

export default function ROISection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            ROI 계산
          </p>
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            실제로 얼마나 이득인가요?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            디자이너 3명 기준 현실적인 시나리오로 계산했습니다.
          </p>
        </div>

        {/* ROI scenario */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          {/* Scenario assumptions */}
          <div className="border-b border-slate-200 bg-white px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">가정 조건</p>
            <div className="mt-3 flex flex-wrap gap-6 text-sm text-slate-600">
              <span>디자이너 3명</span>
              <span>·</span>
              <span>하루 예약 슬롯 16개</span>
              <span>·</span>
              <span>평균 객단가 45,000원</span>
              <span>·</span>
              <span>연쇄 지연 주 2회 (슬롯 4개 손실)</span>
            </div>
          </div>

          {/* Numbers */}
          <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-6 py-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                예약 지연으로 인한 월 손실
              </p>
              <p className="mt-3 text-5xl font-bold text-rose-600">32만원</p>
              <p className="mt-2 text-sm text-slate-500">
                슬롯 4개 × 주 2회 × 4.3주<br />= 월 34슬롯 × 45,000원
              </p>
            </div>
            <div className="px-6 py-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                30% 개선 시 월 회복 매출
              </p>
              <p className="mt-3 text-5xl font-bold text-emerald-600">+9.6만원</p>
              <p className="mt-2 text-sm text-slate-500">
                보수적 추정 기준<br />실제 개선율은 케이스별 상이
              </p>
            </div>
            <div className="px-6 py-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                월 구독료
              </p>
              <p className="mt-3 text-5xl font-bold text-violet-600">19,000원</p>
              <p className="mt-2 text-sm text-slate-500">
                회복 매출 대비<br className="hidden sm:block" />
                <strong className="text-violet-700">ROI 약 5배</strong>
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="border-t border-slate-200 bg-violet-50 px-6 py-4 text-center">
            <p className="text-sm font-semibold text-violet-800">
              💡 하루 밀림 1건만 줄여도 구독료의 2배 이상 회수됩니다
            </p>
          </div>
        </div>

        {/* Fit / Not-fit */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Best fit */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="mb-4 text-sm font-bold text-emerald-800">이런 살롱에 딱 맞습니다</p>
            <ul className="space-y-3">
              {fitItems.map((item) => (
                <li key={item.text} className="flex gap-2.5 text-sm text-emerald-900">
                  <span className="mt-0.5 flex-shrink-0 text-emerald-500">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="mb-4 text-sm font-bold text-slate-600">이런 경우엔 맞지 않습니다</p>
            <ul className="space-y-3">
              {notFitItems.map((item) => (
                <li key={item.text} className="flex gap-2.5 text-sm text-slate-500">
                  <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
