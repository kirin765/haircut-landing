const rows = [
  {
    feature: '예약 접수 · 고객 노출',
    naver: { val: '✅', note: '핵심 기능' },
    pos:   { val: '✅', note: '자체 예약' },
    ours:  { val: '—',  note: '해당 없음' },
  },
  {
    feature: '노쇼 리마인드 자동 발송',
    naver: { val: '△', note: '일부 유료' },
    pos:   { val: '△', note: '제품마다 다름' },
    ours:  { val: '✅', note: '기본 포함' },
  },
  {
    feature: '실제 시술시간 기록',
    naver: { val: '❌', note: '' },
    pos:   { val: '△', note: '단순 기록만' },
    ours:  { val: '✅', note: '디자이너별 적재' },
  },
  {
    feature: '디자이너별 소요시간 분석',
    naver: { val: '❌', note: '' },
    pos:   { val: '❌', note: '' },
    ours:  { val: '✅', note: '평균·편차 자동 계산' },
  },
  {
    feature: '다음 예약 권장 간격 자동 추천',
    naver: { val: '❌', note: '' },
    pos:   { val: '❌', note: '' },
    ours:  { val: '✅', note: '데이터 기반' },
  },
  {
    feature: '밀림 위험 슬롯 사전 경고',
    naver: { val: '❌', note: '' },
    pos:   { val: '❌', note: '' },
    ours:  { val: '✅', note: '당일 운영 보호' },
  },
  {
    feature: '손님 시술 이력 + 자동 인사이트',
    naver: { val: '❌', note: '' },
    pos:   { val: '△', note: '기록만, 분석 없음' },
    ours:  { val: '✅', note: '인사이트 포함' },
  },
  {
    feature: '기존 예약앱 교체 필요',
    naver: { val: '—', note: '' },
    pos:   { val: '⚠️', note: '교체 필요' },
    ours:  { val: '❌', note: '교체 불필요' },
  },
];

function Cell({ val, note }: { val: string; note: string }) {
  const color =
    val === '✅' ? 'text-emerald-600' :
    val === '❌' ? 'text-slate-300' :
    val === '△'  ? 'text-amber-500' :
    val === '⚠️' ? 'text-rose-500' :
    'text-slate-400';

  return (
    <td className="px-4 py-3.5 text-center align-middle">
      <span className={`text-base font-bold ${color}`}>{val}</span>
      {note && <p className="mt-0.5 text-[11px] text-slate-400">{note}</p>}
    </td>
  );
}

export default function ComparisonSection() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            기존 도구와 비교
          </p>
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            네이버 예약이 있는데
            <br />왜 필요한가요?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            네이버·카카오 예약은 <strong>예약 받기</strong>를 해결합니다.
            이 도구는 <strong>예약 간격의 정확도</strong>를 해결합니다.
            서로 다른 문제를 풀기 때문에 교체가 아니라 추가입니다.
          </p>
        </div>

        {/* Table */}
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[640px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    기능
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    네이버·카카오<br />예약
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    살롱 POS<br />(헤어짱류)
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-semibold text-violet-700">
                    <span className="rounded-lg bg-violet-50 px-3 py-1">
                      이 도구
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50/60">
                    <td className="px-4 py-3.5 text-sm font-medium text-slate-700">
                      {row.feature}
                    </td>
                    <Cell val={row.naver.val} note={row.naver.note} />
                    <Cell val={row.pos.val}   note={row.pos.note} />
                    <Cell val={row.ours.val}  note={row.ours.note} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">네이버·카카오 예약</p>
            <p className="mt-2 text-sm text-blue-700 leading-6">
              고객 유입과 예약 접수에 최적화. 운영 내부 효율화 기능은 없음.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">살롱 POS</p>
            <p className="mt-2 text-sm text-amber-700 leading-6">
              정산·재고 관리까지 풀스위트. 도입 비용 높고, 기존 시스템 교체 필요.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <p className="text-sm font-semibold text-violet-800">이 도구</p>
            <p className="mt-2 text-sm text-violet-700 leading-6">
              기존 예약앱 위에 올라타 예약 간격 정확도만 높임. 교체 없이 바로 추가.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
