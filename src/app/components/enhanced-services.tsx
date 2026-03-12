import { motion } from "framer-motion";
import { Building2, Train, Factory } from "lucide-react";

const services = [
  {
    title: "Construction & Building",
    description:
      "Our Construction and Building service is committed to delivering top-notch solutions for residential, commercial, and industrial projects.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    active: true,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Roads & Railways",
    description:
      "Our expertise in civil engineering focuses on building reliable and efficient infrastructure across roads and railway networks.",
    icon: Train,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    active: true,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Paper Manufacturing",
    description:
      "At Maa Parmeswari Cons Pvt. Ltd., we manufacture high-quality paper products for diverse industrial and commercial needs.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b",
    active: false,
    color: "from-green-500 to-green-600",
  },
];

export function EnhancedServices() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-blue-600">Services</span>
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Delivering excellence across multiple industries
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {!service.active && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">

                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${service.color} text-white mb-4`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4">
                    {service.active ? (
                      <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                        Learn More →
                      </span>
                    ) : (
                      <span className="text-gray-400 font-medium">
                        Launching Soon
                      </span>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}