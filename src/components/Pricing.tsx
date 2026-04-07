'use client';

import { useCallback } from 'react';

declare let gtag: Function;

export default function Pricing() {
  const handlePlanClick = useCallback((planName: string) => {
    gtag('event', 'pricing_plan_clicked', {
      plan_name: planName.toLowerCase(),
      plan_type: planName === '프로' ? 'popular' : 'standard',
      currency: 'KRW',
      value: planName === '프로' ? 29900 : 0,
    });
  }, []);

  const plans = [
    {
      name: "스타터",
      id: "starter",
      description: "소규모 미용실 시작",
      price: "무료",
      period: "영구 무료",
      features: [
        "월 20명까지의 고객 리마인드",
        "기본 자동 리마인드 (문자)",
        "확인/취소 상태 수집",
        "이메일 지원",
      ],
      cta: "무료로 시작",
      highlight: false,
    },
    {
      name: "프로",
      id: "pro",
      description: "성장하는 미용실",
      price: "29,900",
      period: "월",
      features: [
        "월 무제한 고객 리마인드",
        "자동 리마인드 (문자 + 카카오톡)",
        "정책 템플릿 및 자동 기록",
        "대시보드 분석",
        "우선 지원 (카톡)",
        "월 500회 문자 포함",
      ],
      cta: "프로 시작하기",
      highlight: true,
    },
    {
      name: "엔터프라이즈",
      id: "enterprise",
      description: "대규모 네트워크",
      price: "맞춤",
      period: "협의",
      features: [
        "무제한 고객 및 지점",
        "모든 프로  기능 포함",
        "커스텀 정책 설정",
        "API 접근",
        "전담 계정 매니저",
        "우선 기술 지원",
        "통합 분석 대시보드",
      ],
      cta: "상담받기",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="text-lg text-gray-600">
            어떤 규모의 미용실이든 적합한 요금제가 있습니다
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
        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">자주 묻는 질문</h3>

          <div className="space-y-6">
            {[
              {
                q: "계약 기간이 있나요?",
                a: "아니요, 언제든지 취소할 수 있습니다. 최소 계약 기간이 없습니다.",
              },
              {
                q: "문자 발송 비용이 별도로 들나요?",
                a: "프로 플랜에는 월 500회 문자가 포함되어 있으며, 추가 발송은 건당 50원입니다.",
              },
              {
                q: "스타터 플랜에서 프로 플랜으로 업그레이드할 수 있나요?",
                a: "네, 언제든지 업그레이드할 수 있으며 비례 배분으로 청구됩니다.",
              },
              {
                q: "지점이 여러 개면 어떻게 하나요?",
                a: "엔터프라이즈 플랜이 적합합니다. 상담을 통해 맞춤 가격을 제공해 드립니다.",
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
  );
}
