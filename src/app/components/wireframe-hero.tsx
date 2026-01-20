export function WireframeHero() {
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            {/* H1 Headline - 2 lines */}
            <div className="space-y-3">
              <div className="h-8 w-full bg-gray-300 border border-gray-400"></div>
              <div className="h-8 w-3/4 bg-gray-300 border border-gray-400"></div>
            </div>
            
            {/* Subheading/Description */}
            <div className="space-y-2 pt-4">
              <div className="h-4 w-full bg-gray-200 border border-gray-300"></div>
              <div className="h-4 w-full bg-gray-200 border border-gray-300"></div>
              <div className="h-4 w-2/3 bg-gray-200 border border-gray-300"></div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <div className="px-8 py-4 bg-gray-400 border-2 border-gray-500">
                <div className="h-4 w-28 bg-gray-500"></div>
              </div>
              <div className="px-8 py-4 bg-gray-200 border-2 border-gray-400">
                <div className="h-4 w-28 bg-gray-300"></div>
              </div>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="w-full aspect-[4/3] bg-gray-200 border-2 border-gray-400 flex items-center justify-center">
            <div className="text-gray-400 text-sm">[ Large Image / Banner Placeholder ]</div>
          </div>
        </div>
      </div>
    </section>
  );
}
