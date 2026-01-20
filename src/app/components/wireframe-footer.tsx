export function WireframeFooter() {
  return (
    <footer className="bg-gray-800 border-t-4 border-gray-900">
      {/* Note: Dark footer (annotation only - using grey shades) */}
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        <div className="space-y-8">
          {/* Logo and Description Row */}
          <div className="space-y-4">
            {/* Logo Placeholder */}
            <div className="w-32 h-10 bg-gray-600 border border-gray-500"></div>
            
            {/* Company Description */}
            <div className="space-y-2 max-w-md">
              <div className="h-3 w-full bg-gray-600 border border-gray-500"></div>
              <div className="h-3 w-5/6 bg-gray-600 border border-gray-500"></div>
            </div>
          </div>
          
          {/* Footer Navigation Links */}
          <div className="flex gap-6 items-center">
            <div className="h-3 w-12 bg-gray-600 border border-gray-500"></div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="h-3 w-14 bg-gray-600 border border-gray-500"></div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="h-3 w-16 bg-gray-600 border border-gray-500"></div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="h-3 w-16 bg-gray-600 border border-gray-500"></div>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-gray-700">
            <div className="h-3 w-48 bg-gray-600 border border-gray-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
