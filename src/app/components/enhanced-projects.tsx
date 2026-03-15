import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import { ExternalLink } from "lucide-react";

export function EnhancedProjects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: "Rail Expansion",
      category: "Infrastructure",
      image: "/image/Rail.png",
    },
    {
      title: "Bridge Construction",
      category: "Construction",
      image: "/image/Construction.png",
    },
    {
      title: "Paper Manufacturing Plant",
      category: "Manufacturing",
      image: "/image/Paper.png",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our diverse portfolio of infrastructure and construction projects.
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <p className="text-sm text-blue-300 mb-1">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <button className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition">
                    View Details
                    <ExternalLink size={16} />
                  </button>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition shadow-lg">
            View All Projects
          </button>
        </motion.div>

      </div>
    </section>
  );
}