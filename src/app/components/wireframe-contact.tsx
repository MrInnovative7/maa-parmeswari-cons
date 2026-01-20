export function WireframeContact() {
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="h-8 w-48 bg-gray-300 border border-gray-400"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Column */}
          <div className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
              <div className="w-full h-12 bg-gray-100 border-2 border-gray-300"></div>
            </div>
            
            {/* Email Input */}
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
              <div className="w-full h-12 bg-gray-100 border-2 border-gray-300"></div>
            </div>
            
            {/* Phone Input */}
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
              <div className="w-full h-12 bg-gray-100 border-2 border-gray-300"></div>
            </div>
            
            {/* Message Box */}
            <div className="space-y-2">
              <div className="h-4 w-20 bg-gray-200 border border-gray-300"></div>
              <div className="w-full h-32 bg-gray-100 border-2 border-gray-300"></div>
            </div>
            
            {/* Submit Button - Full Width */}
            <div className="w-full px-6 py-4 bg-gray-400 border-2 border-gray-500 flex justify-center">
              <div className="h-4 w-24 bg-gray-500"></div>
            </div>
          </div>
          
          {/* Company Info Column */}
          <div className="space-y-8">
            {/* Company Info Heading */}
            <div className="mb-6">
              <div className="h-6 w-40 bg-gray-300 border border-gray-400"></div>
            </div>
            
            {/* Address */}
            <div className="space-y-2">
              <div className="h-4 w-20 bg-gray-200 border border-gray-300"></div>
              <div className="space-y-1">
                <div className="h-3 w-full bg-gray-200 border border-gray-300"></div>
                <div className="h-3 w-4/5 bg-gray-200 border border-gray-300"></div>
                <div className="h-3 w-3/5 bg-gray-200 border border-gray-300"></div>
              </div>
            </div>
            
            {/* Email */}
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
              <div className="h-3 w-56 bg-gray-200 border border-gray-300"></div>
            </div>
            
            {/* Phone */}
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 border border-gray-300"></div>
              <div className="h-3 w-40 bg-gray-200 border border-gray-300"></div>
            </div>
            
            {/* Status/Hours */}
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 border border-gray-300"></div>
              <div className="space-y-1">
                <div className="h-3 w-48 bg-gray-200 border border-gray-300"></div>
                <div className="h-3 w-40 bg-gray-200 border border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
