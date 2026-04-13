type Tone = 'red' | 'emerald' | 'amber';

const menuRows: Array<{
  designer: string;
  menu: string;
  planned: string;
  actual: string;
  delta: string;
  tone: Tone;
}> = [
  { designer: '민지', menu: '뿌리염색', planned: '90분', actual: '108분', delta: '+18분', tone: 'red' },
  { designer: '서윤', menu: '여성 커트', planned: '50분', actual: '47분', delta: '-3분', tone: 'emerald' },
  { designer: '하린', menu: '셋팅펌', planned: '150분', actual: '172분', delta: '+22분', tone: 'amber' },
  { designer: '민지', menu: '탈색 + 염색', planned: '180분', actual: '196분', delta: '+16분', tone: 'red' },
];

const slotRisks: Array<{
  time: string;
  status: string;
  note: string;
  tone: Tone;
}> = [
  { time: '11:30', status: '주의', note: '민지 디자이너 염색 후속 예약이 겹칠 가능성', tone: 'amber' },
  { time: '14:00', status: '안정', note: '커트 중심 배치로 12분 여유 확보', tone: 'emerald' },
  { time: '16:30', status: '위험', note: '셋팅펌 종료 예상이 다음 예약 시작과 충돌', tone: 'red' },
];

const toneClasses: Record<Tone, string> = {
  red: 'bg-red-50 text-red-700 border-red-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
} as const;

export default function MVPPreview() {
  return (
    <section className="bg-[#070b1a] px-4 py-20 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            MVP Preview
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            말로 설명하지 않아도 보이는
            <br />
            살롱 운영 대시보드
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
            Dentboard처럼 제품 자체가 첫 화면에서 읽히도록, 브라우저 프레임 안에
            디자이너별 실제 소요시간, 메뉴별 편차, 밀림 위험 슬롯이 한 번에 보이게
            구성했습니다.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1124] shadow-[0_32px_120px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-3 border-b border-white/10 bg-[#111936] px-5 py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28ca41]" />
            </div>
            <div className="ml-3 flex-1 rounded-full bg-white/5 px-4 py-2 text-xs text-white/35">
              app.noshowhair.com/schedule-intelligence
            </div>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr]">
            <aside className="border-r border-white/10 bg-[#0d142b] p-5">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-sm font-semibold text-cyan-100">노쇼 없는 미용실</p>
                <p className="mt-1 text-xs leading-5 text-cyan-100/70">
                  예약 리마인드 + 시술시간 인텔리전스
                </p>
              </div>

              <nav className="mt-6 space-y-2 text-sm">
                <div className="rounded-xl bg-white/8 px-4 py-3 font-medium text-white">운영 보드</div>
                <div className="rounded-xl px-4 py-3 text-white/55">예약 리마인드</div>
                <div className="rounded-xl px-4 py-3 text-white/55">시술시간 기록</div>
                <div className="rounded-xl px-4 py-3 text-white/55">디자이너 분석</div>
                <div className="rounded-xl px-4 py-3 text-white/55">당일 공실 관리</div>
              </nav>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/35">오늘의 운영 요약</p>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">리마인드 발송</span>
                    <span className="font-semibold">24건</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">지연 위험 슬롯</span>
                    <span className="font-semibold text-amber-300">2개</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">공실 경고</span>
                    <span className="font-semibold text-cyan-200">1개</span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))] p-5 sm:p-6">
              <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">오늘 완료</p>
                      <p className="mt-3 text-3xl font-bold">18건</p>
                      <p className="mt-2 text-sm text-white/55">실제 기록 반영 중</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">평균 오차</p>
                      <p className="mt-3 text-3xl font-bold text-amber-300">11분</p>
                      <p className="mt-2 text-sm text-white/55">최근 14일 기준</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">권장 반영률</p>
                      <p className="mt-3 text-3xl font-bold text-cyan-200">82%</p>
                      <p className="mt-2 text-sm text-white/55">추천 간격 적용 예약</p>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white p-5 text-slate-900">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">디자이너별 실제 소요시간</p>
                        <p className="text-xs text-slate-500">최근 5~20건 기준 자동 갱신</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        오늘 업데이트 4건
                      </span>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200">
                      <div className="grid grid-cols-[1fr_1fr_80px_80px_78px] bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        <span>디자이너</span>
                        <span>메뉴</span>
                        <span>기준</span>
                        <span>실제</span>
                        <span>편차</span>
                      </div>
                      {menuRows.map((row) => (
                        <div
                          key={`${row.designer}-${row.menu}`}
                          className="grid grid-cols-[1fr_1fr_80px_80px_78px] items-center border-t border-slate-200 px-4 py-4 text-sm"
                        >
                          <span className="font-medium text-slate-900">{row.designer}</span>
                          <span className="text-slate-600">{row.menu}</span>
                          <span className="text-slate-500">{row.planned}</span>
                          <span className="font-medium text-slate-900">{row.actual}</span>
                          <span className={`rounded-full border px-2 py-1 text-center text-xs font-semibold ${toneClasses[row.tone]}`}>
                            {row.delta}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[28px] border border-white/10 bg-[#121b39] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">권장 예약 간격</p>
                        <p className="text-xs text-white/45">메뉴별 자동 제안</p>
                      </div>
                      <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-200">
                        민지 디자이너 기준
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-2xl bg-white/5 p-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/70">여성 커트</span>
                          <span className="font-semibold text-white">55분</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[46%] rounded-full bg-cyan-300" />
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/5 p-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/70">뿌리염색</span>
                          <span className="font-semibold text-white">110분</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[74%] rounded-full bg-amber-300" />
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/5 p-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/70">셋팅펌</span>
                          <span className="font-semibold text-white">175분</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[92%] rounded-full bg-rose-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white p-5 text-slate-900">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">밀림 위험 슬롯</p>
                        <p className="text-xs text-slate-500">당일 예약표에 바로 표시</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        3개 슬롯 분석
                      </span>
                    </div>

                    <div className="space-y-3">
                      {slotRisks.map((slot) => (
                        <div key={slot.time} className="rounded-2xl border border-slate-200 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-slate-900">{slot.time}</span>
                              <span className={`rounded-full border px-2 py-1 text-xs font-semibold ${toneClasses[slot.tone]}`}>
                                {slot.status}
                              </span>
                            </div>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{slot.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
