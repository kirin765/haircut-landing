'use client';

import { useState } from 'react';
import Toast from './Toast';

export default function Benefits() {
  const [toast, setToast] = useState<{ message: string; type: 'info' | 'warning' } | null>(null);

  const benefits = [
    {
      icon: "📈",
      title: "빈 슬롯과 과밀 슬롯을 같이 줄입니다",
      description: "노쇼 공백과 과도한 지연 슬롯을 함께 관리해 하루 운영 밀도를 안정화합니다.",
    },
    {
      icon: "⏱️",
      title: "감이 아니라 기록으로 예약을 잡습니다",
      description: "디자이너 개인차를 반영한 실제 평균시간으로 다음 예약 간격을 정할 수 있습니다.",
    },
    {
      icon: "😊",
      title: "대기와 클레임을 줄입니다",
      description: "예상보다 오래 걸리는 메뉴와 담당자를 미리 반영해 고객 대기를 완화합니다.",
    },
    {
      icon: "🔄",
      title: "직원별 운영 기준을 통일합니다",
      description: "원장 감각이나 직원 경험치 대신 동일한 계산 로직으로 운영 기준을 맞춥니다.",
    },
    {
      icon: "📊",
      title: "데이터 기반 운영이 시작됩니다",
      description: "노쇼·당일취소·시술시간 편차를 한 화면에서 보고 다음 운영 판단에 반영합니다.",
    },
    {
      icon: "🔐",
      title: "기존 툴을 버리지 않아도 됩니다",
      description: "예약 시스템 대체 없이 붙는 보조 도구로 시작해 도입 장벽을 낮춥니다.",
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            도입 시 얻을 수 있는 이점
          </h2>
          <p className="text-lg text-gray-600">
            고객관리 툴이 아니라 운영 정확도를 높이는 도구로 포지셔닝합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition bg-white"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            지금 필요한 건 거대한 ERP가 아닙니다
          </h3>
          <p className="text-lg mb-8 text-white/90">
            예약 리마인드와 실제 시술시간 기록만 잡아도 소규모 살롱 운영은 훨씬 덜 밀립니다.
          </p>
          <button
            onClick={() => setToast({ message: '아직 개발 중입니다. 곧 오픈될 예정입니다! 📅', type: 'info' })}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            출시 알림 받기
          </button>
        </div>
      </div>
      </section>
    </>
  );
}
