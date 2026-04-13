const boardColumns = [
  {
    title: '신규 문의',
    count: 5,
    accent: 'bg-blue-500',
    cards: [
      {
        name: '박은서',
        phone: '010-54**-12**',
        meta: '뿌리염색 · 민지',
        date: '오늘 10:30 접수',
        badge: '오늘 연락',
        badgeClass: 'bg-blue-50 text-blue-700',
      },
      {
        name: '이수민',
        phone: '010-33**-77**',
        meta: '여성 커트 · 서윤',
        date: '어제 18:10 접수',
        badge: '1회 시도',
        badgeClass: 'bg-slate-100 text-slate-600',
      },
    ],
  },
  {
    title: '상담 예정',
    count: 4,
    accent: 'bg-violet-500',
    cards: [
      {
        name: '정하린',
        phone: '010-90**-43**',
        meta: '셋팅펌 · 하린',
        date: '오늘 14:00 예약',
        badge: '예정',
        badgeClass: 'bg-violet-50 text-violet-700',
      },
    ],
  },
  {
    title: '상담 완료',
    count: 6,
    accent: 'bg-emerald-500',
    cards: [
      {
        name: '한지우',
        phone: '010-82**-15**',
        meta: '탈색 + 염색 · 민지',
        date: '권장 간격 190분',
        badge: '기록 반영',
        badgeClass: 'bg-emerald-50 text-emerald-700',
      },
      {
        name: '오세아',
        phone: '010-74**-63**',
        meta: '남성 커트 · 서윤',
        date: '권장 간격 45분',
        badge: '안정',
        badgeClass: 'bg-slate-100 text-slate-600',
      },
    ],
  },
  {
    title: '보류 / 재확인',
    count: 3,
    accent: 'bg-amber-500',
    cards: [
      {
        name: '최민아',
        phone: '010-41**-88**',
        meta: '볼륨매직 · 하린',
        date: '비용 문의 후 보류',
        badge: '재연락 필요',
        badgeClass: 'bg-amber-50 text-amber-700',
      },
    ],
  },
  {
    title: '밀림 위험',
    count: 2,
    accent: 'bg-rose-500',
    cards: [
      {
        name: '16:30 슬롯',
        phone: '민지 디자이너',
        meta: '탈색 종료 예상 16:42',
        date: '다음 예약 16:30 시작',
        badge: '위험',
        badgeClass: 'bg-rose-50 text-rose-700',
      },
    ],
  },
];

const summaryCards = [
  { label: '오늘 연락해야 할 예약', value: '12명', note: '리마인드 발송 전 확인 필요' },
  { label: '평균 소요시간 오차', value: '11분', note: '최근 14일 기준 자동 계산' },
  { label: '즉시 조정 필요한 슬롯', value: '2개', note: '연쇄 지연 가능성 경고' },
];

export default function MVPPreview() {
  return (
    <section className="bg-[#f5f7fb] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
            MVP Preview
          </p>
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            한눈에 흐름이 읽히는
            <br />
            살롱 운영 보드
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            오늘 연락해야 할 예약, 실제 시술시간 반영 상태, 밀림 위험 슬롯을 한 화면에서
            확인할 수 있도록 구성했습니다. 복잡한 설정 없이도 지금 어떤 예약이 위험한지
            바로 판단할 수 있는 형태의 운영 화면입니다.
          </p>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[220px_1fr]">
            <aside className="border-r border-slate-200 bg-[#fbfcfe] p-6">
              <div>
                <p className="text-lg font-bold text-slate-950">노쇼헤어</p>
                <p className="mt-1 text-xs text-slate-500">운영 대시보드 0.1</p>
              </div>

              <nav className="mt-8 space-y-1 text-sm">
                <div className="rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-700">
                  상담 현황 보드
                </div>
                <div className="rounded-xl px-4 py-3 text-slate-500">오늘 리마인드</div>
                <div className="rounded-xl px-4 py-3 text-slate-500">시술시간 기록</div>
                <div className="rounded-xl px-4 py-3 text-slate-500">디자이너 분석</div>
                <div className="rounded-xl px-4 py-3 text-slate-500">설정</div>
              </nav>

              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  오늘의 핵심
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs text-slate-500">리마인드 예정</p>
                    <p className="text-lg font-bold text-slate-900">24건</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">밀림 위험 슬롯</p>
                    <p className="text-lg font-bold text-rose-600">2개</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">권장 간격 갱신</p>
                    <p className="text-lg font-bold text-blue-700">4메뉴</p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="bg-[#fcfdff] p-6">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">상담 현황 보드</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    오늘 연락 대상, 실제 시술시간 반영, 밀림 위험 슬롯을 한 화면에서 관리
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500">
                    디자이너 전체
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500">
                    상담 날짜
                  </div>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
                    신규 예약 등록
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {summaryCards.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                    <p className="mt-3 text-3xl font-bold text-slate-950">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-x-auto">
                <div className="flex min-w-[980px] gap-4 pb-2">
                  {boardColumns.map((column) => (
                    <div key={column.title} className="w-[188px] flex-shrink-0">
                      <div className="rounded-t-2xl border border-slate-200 bg-white px-4 py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full ${column.accent}`} />
                            <p className="text-sm font-semibold text-slate-800">{column.title}</p>
                          </div>
                          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
                            {column.count}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3 rounded-b-2xl border border-t-0 border-slate-200 bg-slate-50 p-3">
                        {column.cards.map((card) => (
                          <div key={`${column.title}-${card.name}`} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                            <span className={`inline-flex rounded-md px-2 py-1 text-[11px] font-semibold ${card.badgeClass}`}>
                              {card.badge}
                            </span>
                            <p className="mt-3 text-sm font-semibold text-slate-900">{card.name}</p>
                            <p className="mt-1 text-xs text-slate-400">{card.phone}</p>
                            <div className="mt-3 space-y-1 text-xs leading-5 text-slate-500">
                              <p>{card.meta}</p>
                              <p>{card.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
