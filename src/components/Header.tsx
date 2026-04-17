export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            노쇼 없는 미용실
          </h1>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#problem" className="text-gray-600 hover:text-gray-900 transition">문제</a></li>
          <li><a href="#features" className="text-gray-600 hover:text-gray-900 transition">핵심 기능</a></li>
          <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">운영 방식</a></li>
          <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">요금제</a></li>
          <li><a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a></li>
          <li><a href="#cta" className="text-gray-600 hover:text-gray-900 transition">사전 등록</a></li>
        </ul>
      </nav>
    </header>
  );
}
