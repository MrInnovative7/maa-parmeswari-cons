export function WireframeProjects() {
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="h-8 w-72 bg-gray-300 border border-gray-400"></div>
        </div>
        
        {/* Note: Optional section for future expansion */}
        <div className="text-gray-400 text-sm mb-8 italic">
          [ Optional: Projects / Capabilities - For future expansion ]
        </div>
        
        {/* Project/Capability Image Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-3">
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-gray-200 border-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-400 text-sm">[ Image ]</div>
              </div>
              
              {/* Caption */}
              <div className="space-y-1">
                <div className="h-4 w-3/4 bg-gray-200 border border-gray-300"></div>
                <div className="h-3 w-1/2 bg-gray-200 border border-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
