export function WireframeAbout() {
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="h-8 w-48 bg-gray-300 border border-gray-400"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content Column */}
          <div className="space-y-8">
            {/* Text Block 1 */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 border border-gray-300"></div>
              <div className="h-4 w-full bg-gray-200 border border-gray-300"></div>
              <div className="h-4 w-full bg-gray-200 border border-gray-300"></div>
              <div className="h-4 w-5/6 bg-gray-200 border border-gray-300"></div>
            </div>
            
            {/* Text Block 2 */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 border border-gray-300"></div>
              <div className="h-4 w-full bg-gray-200 border border-gray-300"></div>
              <div className="h-4 w-4/5 bg-gray-200 border border-gray-300"></div>
            </div>
            
            {/* Info Highlights Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {/* Founded Year */}
              <div className="p-4 bg-gray-100 border-2 border-gray-300">
                <div className="h-6 w-16 bg-gray-300 border border-gray-400 mb-2"></div>
                <div className="h-3 w-24 bg-gray-200 border border-gray-300"></div>
              </div>
              
              {/* Industry */}
              <div className="p-4 bg-gray-100 border-2 border-gray-300">
                <div className="h-6 w-20 bg-gray-300 border border-gray-400 mb-2"></div>
                <div className="h-3 w-20 bg-gray-200 border border-gray-300"></div>
              </div>
              
              {/* Company Status */}
              <div className="p-4 bg-gray-100 border-2 border-gray-300">
                <div className="h-6 w-24 bg-gray-300 border border-gray-400 mb-2"></div>
                <div className="h-3 w-28 bg-gray-200 border border-gray-300"></div>
              </div>
            </div>
          </div>
          
          {/* Image Placeholder Column */}
          <div className="w-full aspect-[4/3] bg-gray-200 border-2 border-gray-400 flex items-center justify-center">
            <div className="text-gray-400 text-sm">[ Image Placeholder ]</div>
          </div>
        </div>
      </div>
    </section>
  );
}
