import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import { ExternalLink } from "lucide-react";

export function EnhancedProjects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: "Rail Expansion",
      category: "Infrastructure",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Commercial Complex",
      category: "Construction",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      title: "Paper Manufacturing",
      category: "Manufacturing",
      image:
        "https://www.maaparmeswaricons.com/images/service2.png",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our diverse portfolio of successful projects across
            multiple industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium text-blue-300 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <button className="inline-flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:scale-105 font-medium">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
