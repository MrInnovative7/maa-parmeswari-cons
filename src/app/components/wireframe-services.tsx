export function WireframeServices() {
  const services = [
    'Construction & Building',
    'Roads & Railways',
    'Paper Manufacturing'
  ];
  
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Section Heading - Centered */}
        <div className="text-center mb-10">
          <div className="h-8 w-64 bg-gray-300 border border-gray-400 mx-auto"></div>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-50 border-2 border-gray-300">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-gray-300 border-2 border-gray-400 mb-6"></div>
              
              {/* Service Title */}
              <div className="mb-4">
                <div className="h-6 w-3/4 bg-gray-300 border border-gray-400"></div>
              </div>
              
              {/* Description - 2-3 lines */}
              <div className="space-y-2 mb-6">
                <div className="h-3 w-full bg-gray-200 border border-gray-300"></div>
                <div className="h-3 w-full bg-gray-200 border border-gray-300"></div>
                <div className="h-3 w-4/5 bg-gray-200 border border-gray-300"></div>
              </div>
              
              {/* Learn More Button */}
              <div className="pt-2">
                <div className="inline-block px-4 py-2 bg-gray-200 border border-gray-400">
                  <div className="h-3 w-20 bg-gray-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
