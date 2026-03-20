import { motion } from "motion/react";

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

  const loopImages = [...images, ...images]; // infinite loop

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Our <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-gray-600 mt-3">
            A showcase of our construction and infrastructure work
          </p>

        </div>

        {/* Image Slider */}

        <div className="overflow-hidden">

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >

            {loopImages.map((img, i) => (

              <div
                key={i}
                className="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-xl"
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