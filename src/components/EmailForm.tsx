'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Connect to your email service (e.g., Resend, SendGrid, etc.)
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));

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
          가입이 완료되었습니다!
        </h3>
        <p className="text-gray-600">
          이메일 주소로 가입 완료 메시지를 보내드렸습니다.
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
          {isLoading ? '진행중...' : '무료 가입'}
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-3">
        💡 가입 후 5분 안에 무료로 체험할 수 있습니다. 신용카드는 필요 없습니다.
      </p>
    </form>
  );
}
