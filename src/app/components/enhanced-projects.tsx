import { motion } from "motion/react";
import { useRef, useState } from "react";

const images = [
  "/Construction.png",
  "/Image1.png",
  "/Rail.png",
  "/Image2.png",
  "/Image3.jpeg",
  "/Image4.jpeg",
  "/Image5.jpeg",
];

export function EnhancedProjects() {
  const [isHovered, setIsHovered] = useState(false);

  // double images for seamless loop
  const loopImages = [...images, ...images];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            A showcase of our construction and infrastructure work
          </p>
        </div>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-4 md:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {loopImages.map((img, i) => (
              <div
                key={i}
                className="
                  min-w-[80%] 
                  sm:min-w-[45%] 
                  md:min-w-[320px]
                  h-[200px] md:h-[220px]
                  rounded-2xl 
                  overflow-hidden 
                  shadow-lg 
                  hover:shadow-2xl 
                  transition-all duration-300
                "
              >
                <img
                  src={img}
                  alt="project"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}