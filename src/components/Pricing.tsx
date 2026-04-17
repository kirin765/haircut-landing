'use client';

import { useCallback, useState } from 'react';
import Toast from './Toast';

declare let gtag: Function;

export default function Pricing() {
  const [toast, setToast] = useState<{ message: string; type: 'info' | 'warning' } | null>(null);

  const handlePlanClick = useCallback((planName: string) => {
    gtag('event', 'pricing_plan_clicked', {
      plan_name: planName.toLowerCase(),
      plan_type: planName === '프로' ? 'popular' : planName === '팀' ? 'team' : 'standard',
      currency: 'KRW',
      value: planName === '프로' ? 19000 : planName === '팀' ? 29000 : 0,
    });

    setToast({ message: '아직 개발 중입니다. 곧 오픈될 예정입니다! 📅', type: 'info' });
  }, []);

  const plans = [
    {
      name: "스타터",
      id: "starter",
      description: "1인샵·초기 검증용",
      price: "무료",
      period: "영구 무료",
      features: [
        "월 30건 시술 기록",
        "기본 자동 리마인드 (문자)",
        "디자이너 1명 기준 평균시간 계산",
        "기본 권장 예약 간격 제안",
      ],
      cta: "무료로 시작",
      highlight: false,
    },
    {
      name: "프로",
      id: "pro",
      description: "소규모 살롱 기본 운영용",
      price: "19,000",
      period: "월",
      features: [
        "월 무제한 시술 기록",
        "자동 리마인드 (문자)",
        "디자이너별·메뉴별 평균/편차 분석",
        "밀림 위험 슬롯 표시",
        "권장 예약 간격 제안",
        "디자이너 3명까지 지원",
        "이메일 지원",
      ],
      cta: "프로 시작하기",
      highlight: true,
    },
    {
      name: "팀",
      id: "team",
      description: "멀티디자이너·다점포 준비용",
      price: "29,000",
      period: "월",
      features: [
        "디자이너 10명까지 지원",
        "모든 프로 기능 포함",
        "지점별 운영 기준 분리",
        "월간 운영 리포트",
        "우선 카카오톡 지원",
        "추가 알림 발송 옵션",
      ],
      cta: "상담받기",
      highlight: false,
    },
  ];

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={4000}
          onClose={() => setToast(null)}
        />
      )}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              합리적인 가격으로 시작하세요
            </h2>
            <p className="text-lg text-gray-600">
              마이크로 SaaS답게 가볍게 도입하고, 운영 효과가 보이면 상위 플랜으로 올리는 구조입니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden transition transform hover:scale-105 ${
                  plan.highlight
                    ? "bg-gradient-hero text-white shadow-2xl scale-105 md:scale-100 ring-2 ring-purple-300"
                    : "bg-white border border-gray-200 shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    인기
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                      {plan.period !== "협의" && plan.period !== "영구 무료" && (
                        <span className={`text-lg font-normal ml-2 ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>
                          / {plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mt-2 ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>
                      {plan.period}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                      plan.highlight
                        ? "bg-white text-purple-600 hover:bg-gray-50"
                        : "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className={`text-sm font-semibold ${plan.highlight ? "text-white/90" : "text-gray-700"}`}>
                      포함 기능:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start text-sm ${plan.highlight ? "text-white/90" : "text-gray-700"}`}
                        >
                          <span className={`mr-3 text-lg flex-shrink-0 ${plan.highlight ? "text-white" : "text-green-500"}`}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div id="faq" className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">자주 묻는 질문</h3>
            <p className="text-gray-600 mb-6">
              미용실 예약 관리 프로그램, 노쇼 방지, 시술시간 기록에 대해 가장 많이 묻는 내용을 정리했습니다.
            </p>

            <div className="space-y-6">
              {[
                {
                  q: "기존 예약 시스템을 바꿔야 하나요?",
                  a: "아니요. 기존 예약 시스템은 그대로 두고 예약 데이터와 실제 시술시간 기록을 붙여 쓰는 방식입니다.",
                },
                {
                  q: "미용실 노쇼 방지는 어떻게 도와주나요?",
                  a: "예약 리마인드를 중심으로 당일 공백을 줄이고, 노쇼와 당일 취소 패턴을 함께 확인할 수 있게 합니다.",
                },
                {
                  q: "시술시간 기록은 어떻게 쓰나요?",
                  a: "시술 시작과 종료 시각만 기록해도 디자이너별·메뉴별 실제 소요시간이 쌓이고 다음 예약 간격 추천에 반영됩니다.",
                },
                {
                  q: "추천 예약 간격은 어떻게 계산되나요?",
                  a: "최근 5~20건의 디자이너별·시술별 실제 소요시간을 기준으로 평균과 편차를 계산해 권장값을 제안합니다.",
                },
                {
                  q: "어떤 미용실에 가장 잘 맞나요?",
                  a: "염색과 펌 비중이 높고, 예약 간격이 조금만 흔들려도 대기와 공실이 생기는 소규모 살롱에 가장 잘 맞습니다.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
