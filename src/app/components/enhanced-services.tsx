import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import {
  Building2,
  Train,
  FileText,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

// ✅ IMAGE IMPORTS
import constructionImg from "../../assets/services/construction.png";
import railwayImg from "../../assets/services/railway.png";
import paperImg from "../../assets/services/paper.png";

export function EnhancedServices() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      image: constructionImg,
      icon: Building2,
      title: "Construction & Building",
      short:
        "Our Construction and Building service is committed to delivering top-notch solutions for residential, commercial, and industrial projects.",
      full:
        "Our Construction and Building service is committed to delivering top-notch solutions for residential, commercial, and industrial projects. We specialize in designing and constructing robust, sustainable structures that meet modern standards and client requirements. Whether it's creating office spaces, residential complexes, or industrial facilities, we ensure durability, safety, and excellence backed by skilled engineers and professionals.",
      gradient: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
    },
    {
      image: railwayImg,
      icon: Train,
      title: "Roads & Railways",
      short:
        "Our expertise in civil engineering focuses on building reliable and efficient infrastructure across roads and railway networks.",
      full:
        "Our expertise in civil engineering focuses on building reliable and efficient infrastructure. From highways to railway tracks, we ensure high-quality workmanship, safety compliance, and sustainable practices. Our solutions are designed to stand the test of time while minimizing environmental impact.",
      gradient: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
    },
    {
      image: paperImg,
      icon: FileText,
      title: "Paper Manufacturing",
      short:
        "At Maa Parmeswari Cons Pvt. Ltd., we manufacture high-quality paper products for diverse industrial and commercial needs.",
      full:
        "At Maa Parmeswari Cons Pvt. Ltd., we manufacture high-quality paper products for diverse industrial and commercial needs. Our production emphasizes sustainability, eco-friendly processes, and advanced technology to deliver durable, versatile, and environmentally responsible paper solutions.",
      gradient: "from-green-500 to-green-600",
      textColor: "text-green-600",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across multiple industries
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-8 flex flex-col flex-1">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {isOpen ? service.full : service.short}
                  </p>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`mt-5 inline-flex items-center gap-2 font-medium ${service.textColor}`}
                  >
                    {isOpen ? (
                      <>
                        Show Less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        Learn More <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
