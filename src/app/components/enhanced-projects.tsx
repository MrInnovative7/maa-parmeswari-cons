import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Railway Track Expansion",
    category: "Infrastructure",
    image: "/image/Rail.png",
  },
  {
    title: "Bridge Construction",
    category: "Construction",
    image: "/image/Construction.png",
  },
  {
    title: "Highway Development",
    category: "Road Infrastructure",
    image: "/image/road.jpg",
  },
  {
    title: "Commercial Building",
    category: "Civil Engineering",
    image: "/image/building.jpg",
  },
  {
    title: "Paper Manufacturing Plant",
    category: "Manufacturing",
    image: "/image/paper.jpg",
  },
];

export function EnhancedProjects() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of our infrastructure, construction, and development
            projects across multiple sectors.
          </p>

        </div>

        {/* Slider */}

        <div className="relative">

          <motion.div
            animate={{ x: `-${index * 340}px` }}
            transition={{ duration: 1 }}
            className="flex gap-8"
          >

            {projects.map((project, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -15, scale: 1.04 }}
                className="min-w-[320px] rounded-2xl overflow-hidden bg-white shadow-xl group"
              >

                {/* Image */}

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <p className="text-blue-600 text-sm font-medium mb-1">
                    {project.category}
                  </p>

                  <h3 className="text-lg font-semibold mb-3">
                    {project.title}
                  </h3>

                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition">

                    View Project

                    <ExternalLink size={16} />

                  </button>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}