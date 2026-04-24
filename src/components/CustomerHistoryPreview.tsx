const customers = [
  { name: '박은서', phone: '010-54**-12**', visits: 14, last: '2025.04.18', tag: '단골' },
  { name: '이수민', phone: '010-33**-77**', visits: 7, last: '2025.04.12', tag: '재방문' },
  { name: '정하린', phone: '010-90**-43**', visits: 3, last: '2025.03.29', tag: '신규' },
  { name: '한지우', phone: '010-82**-15**', visits: 22, last: '2025.04.20', tag: '단골' },
];

const historyRows = [
  {
    date: '2025.04.18',
    menu: '뿌리염색',
    designer: '민지',
    booked: '60분',
    actual: '74분',
    diff: '+14분',
    diffClass: 'text-rose-600',
    note: '흰머리 많음, 다음엔 80분 권장',
  },
  {
    date: '2025.02.03',
    menu: '전체염색 + 트리트먼트',
    designer: '민지',
    booked: '90분',
    actual: '88분',
    diff: '-2분',
    diffClass: 'text-emerald-600',
    note: '',
  },
  {
    date: '2024.11.22',
    menu: '뿌리염색',
    designer: '서윤',
    booked: '60분',
    actual: '68분',
    diff: '+8분',
    diffClass: 'text-amber-600',
    note: '처음 방문, 모질 건조',
  },
  {
    date: '2024.09.05',
    menu: '여성 커트',
    designer: '하린',
    booked: '30분',
    actual: '29분',
    diff: '-1분',
    diffClass: 'text-emerald-600',
    note: '',
  },
];

export default function CustomerHistoryPreview() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
            MVP Preview · 시술기록
          </p>
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            손님별 시술 이력을
            <br />
            한 화면에서 확인
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            재방문 손님이 오면 이전에 어떤 메뉴를 받았는지, 실제 소요시간이 얼마나 됐는지
            바로 확인할 수 있습니다. 기억에 의존하지 않고 기록이 판단을 도와줍니다.
          </p>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[900px] overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-[220px_1fr]">
              {/* Sidebar */}
              <aside className="border-r border-slate-200 bg-[#fbfcfe] p-5">
                <div className="mb-4">
                  <p className="text-lg font-bold text-slate-950">노쇼헤어</p>
                  <p className="mt-1 text-xs text-slate-500">운영 대시보드 0.1</p>
                </div>

                <div className="relative mb-4">
                  <input
                    readOnly
                    className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-8 pr-3 text-xs text-slate-400 outline-none"
                    placeholder="손님 검색..."
                  />
                  <svg className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </div>

                <div className="space-y-1">
                  {customers.map((c, i) => (
                    <div
                      key={c.name}
                      className={`cursor-pointer rounded-xl px-3 py-2.5 ${i === 0 ? 'bg-violet-50 ring-1 ring-violet-200' : 'hover:bg-slate-50'}`}
                    >
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-semibold ${i === 0 ? 'text-violet-700' : 'text-slate-800'}`}>{c.name}</p>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          c.tag === '단골' ? 'bg-violet-100 text-violet-700' :
                          c.tag === '재방문' ? 'bg-blue-50 text-blue-600' :
                          'bg-slate-100 text-slate-500'
                        }`}>{c.tag}</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-400">{c.phone}</p>
                      <p className="text-[11px] text-slate-400">방문 {c.visits}회 · {c.last}</p>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Main */}
              <div className="bg-[#fcfdff] p-6">
                {/* Customer header */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                        박
                      </div>
                      <div>
                        <p className="text-xl font-bold text-slate-950">박은서</p>
                        <p className="text-sm text-slate-500">010-54**-12** · 총 14회 방문</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-center">
                      <p className="text-xs text-slate-400">총 방문</p>
                      <p className="text-lg font-bold text-slate-900">14회</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-center">
                      <p className="text-xs text-slate-400">평균 초과</p>
                      <p className="text-lg font-bold text-rose-600">+10분</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-center">
                      <p className="text-xs text-slate-400">주 메뉴</p>
                      <p className="text-lg font-bold text-slate-900">염색</p>
                    </div>
                  </div>
                </div>

                {/* History table */}
                <div className="mt-5">
                  <p className="mb-3 text-sm font-semibold text-slate-700">시술 이력</p>
                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 text-xs text-slate-500">
                          <th className="px-4 py-3 text-left font-medium">날짜</th>
                          <th className="px-4 py-3 text-left font-medium">메뉴</th>
                          <th className="px-4 py-3 text-left font-medium">담당</th>
                          <th className="px-4 py-3 text-left font-medium">예약</th>
                          <th className="px-4 py-3 text-left font-medium">실제</th>
                          <th className="px-4 py-3 text-left font-medium">차이</th>
                          <th className="px-4 py-3 text-left font-medium">특이사항</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {historyRows.map((row) => (
                          <tr key={row.date} className="hover:bg-slate-50">
                            <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-500">{row.date}</td>
                            <td className="px-4 py-3 font-medium text-slate-800">{row.menu}</td>
                            <td className="px-4 py-3 text-slate-500">{row.designer}</td>
                            <td className="px-4 py-3 text-slate-500">{row.booked}</td>
                            <td className="px-4 py-3 font-semibold text-slate-800">{row.actual}</td>
                            <td className={`px-4 py-3 font-semibold ${row.diffClass}`}>{row.diff}</td>
                            <td className="px-4 py-3 text-xs text-slate-400">{row.note || '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Insight box */}
                <div className="mt-4 rounded-2xl border border-violet-100 bg-violet-50 p-4">
                  <p className="text-xs font-semibold text-violet-700">자동 인사이트</p>
                  <p className="mt-1 text-sm text-violet-900">
                    박은서 손님은 뿌리염색 시 평균 <strong>+11분</strong> 초과됩니다.
                    다음 예약 시 <strong>74분</strong> 기준으로 슬롯을 잡는 것을 권장합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
