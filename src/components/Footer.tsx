export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">노쇼 없는 미용실</h3>
            <p className="text-sm text-gray-400">
              노쇼 관리와 디자이너별 시술시간 기반 예약 운영을 돕는 소규모 미용실용 도구입니다.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">제품</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-400 hover:text-white transition">기능</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">사용 방법</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">가격</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">법률</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">개인정보처리방침</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">이용약관</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">환불 정책</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@reviewboost.co.kr" className="text-gray-400 hover:text-white transition">
                  support@reviewboost.co.kr
                </a>
              </li>
              <li><a href="tel:1234567890" className="text-gray-400 hover:text-white transition">카카오톡 상담</a></li>
              <li className="text-gray-400">
                9AM - 6PM (평일)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} 노쇼 없는 미용실. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                💬 카카오톡
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                📱 인스타그램
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
