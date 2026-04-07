export default function DevelopmentBanner() {
  return (
    <div className="bg-yellow-50 border-b border-yellow-200 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="text-2xl">⚠️</span>
        <div>
          <p className="text-yellow-800 font-semibold">
            현재 개발 중인 서비스입니다
          </p>
          <p className="text-yellow-700 text-sm mt-1">
            아래 정보는 예정 기능이며, 실제 서비스 제공은 아직 불가능합니다.
            <span className="font-semibold"> 베타 테스터를 모집 중입니다. 🚀</span>
          </p>
        </div>
      </div>
    </div>
  );
}
