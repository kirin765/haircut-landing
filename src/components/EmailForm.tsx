'use client';

import { useState } from 'react';

declare let gtag: Function;

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      alert('이메일을 입력해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error ?? '구독 등록에 실패했습니다.');
      }

      if (typeof gtag === 'function') {
        // Track conversion event in Google Analytics after a successful submission
        gtag('event', 'email_signup_submitted', {
          email_domain: normalizedEmail.split('@')[1],
          source: 'email_form',
        });
      }

      setIsSubmitted(true);
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          이메일이 접수되었습니다!
        </h3>
        <p className="text-gray-600">
          등록해주신 이메일로 안내를 보내드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="이메일 주소를 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:bg-purple-400 whitespace-nowrap"
        >
          {isLoading ? '진행중...' : '얼리버드 30% 할인 신청'}
        </button>
      </div>
      <p className="text-sm text-gray-600 font-medium mt-3">
        🎁 얼리버드 한정 30% 할인 · 사전예약 마감 전에 등록하세요.
      </p>
    </form>
  );
}
