export function WireframeWhyChoose() {
  const features = [
    'Quality & Safety',
    'Timely Delivery',
    'Experienced Team',
    'Compliance & Trust',
    'Customer Satisfaction'
  ];
  
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="h-8 w-64 bg-gray-300 border border-gray-400"></div>
        </div>
        
        {/* Icon + Text Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon Placeholder */}
              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 flex-shrink-0"></div>
              
              {/* Text Content */}
              <div className="flex-1 space-y-2">
                <div className="h-5 w-3/4 bg-gray-300 border border-gray-400"></div>
                <div className="space-y-1">
                  <div className="h-3 w-full bg-gray-200 border border-gray-300"></div>
                  <div className="h-3 w-5/6 bg-gray-200 border border-gray-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
