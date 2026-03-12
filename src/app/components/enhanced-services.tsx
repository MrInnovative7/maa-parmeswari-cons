import { motion } from "motion/react";
import { Building2, Train, Factory } from "lucide-react";

const services = [
  {
    title: "Construction & Building",
    description:
      "Delivering high-quality residential, commercial and industrial construction solutions with modern engineering practices.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    active: true,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Roads & Railways",
    description:
      "Developing durable roads and railway infrastructure with advanced machinery and strict quality standards.",
    icon: Train,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    active: true,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Paper Manufacturing",
    description:
      "Our upcoming manufacturing division will focus on high-quality paper production for industrial and commercial needs.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581093588401-22f7f9e9d8d1",
    active: false,
    color: "from-green-500 to-green-600",
  },
];

export function EnhancedServices() {
  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-blue-600">Services</span>
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Delivering excellence across multiple industries
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      !service.active ? "opacity-60" : ""
                    }`}
                  />

                  {/* Coming Soon Badge */}
                  {!service.active && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white mb-4`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Button */}
                  <div className="mt-5">
                    {service.active ? (
                      <button className="text-blue-600 font-medium hover:underline">
                        Learn More →
                      </button>
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