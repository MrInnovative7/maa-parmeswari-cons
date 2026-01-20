export function WireframeHeader() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-300 z-50">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="w-32 h-10 bg-gray-300 border border-gray-400"></div>
          
          {/* Navigation Menu */}
          <nav className="flex items-center gap-8">
            <div className="h-4 w-12 bg-gray-200 border border-gray-300"></div>
            <div className="h-4 w-14 bg-gray-200 border border-gray-300"></div>
            <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
            <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
            <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
          </nav>
          
          {/* CTA Button */}
          <div className="px-6 py-3 bg-gray-300 border-2 border-gray-500">
            <div className="h-4 w-24 bg-gray-400"></div>
          </div>
        </div>
      </div>
      {/* Note: Sticky behavior enabled */}
    </header>
  );
}
