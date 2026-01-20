import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "https://railanalysis.in/wp-content/uploads/2024/01/MRVC-Unveils-E-Bidding-for-Crucial-Rail-Infrastructure-Expansion-in-Mumbai0A.png",
  "https://wordpress.bricknbolt.com/blogs-and-articles/wp-content/uploads/sites/2/2024/05/Building-materials-needed-to-build-a-house.webp",
  "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/4/best-construction-companies-in-noida_0_1200.jpg.webp",
];

export function EnhancedHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* ✅ FIXED: Welcome to – infinite word bounce */}
            <div className="inline-flex gap-3 px-7 py-3 bg-blue-100 text-blue-700 rounded-full text-2xl md:text-3xl font-bold tracking-wide">
              {["Welcome", "to"].map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    delay: index * 0.25,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              MAA PARMESWARI{" "}
              <span className="text-blue-600">CONS PRIVATE LIMITED</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Your trusted partner in construction and paper product manufacturing.
              Leading infrastructure and manufacturing solutions with a commitment
              to quality, safety, and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 font-medium"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all flex items-center gap-2 font-medium"
              >
                <Play size={20} />
                View Projects
              </button>
            </div>
          </motion.div>

          {/* IMAGE – PAGE FLIP */}
          <div
            className="relative w-full h-[420px] flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {/* Back */}
            <img
              src={images[(activeIndex + 1) % images.length]}
              className="absolute w-[90%] h-[90%] object-cover rounded-2xl shadow-xl rotate-[-8deg] translate-x-[-30px] translate-y-[20px] opacity-30"
              aria-hidden
            />

            {/* Middle */}
            <img
              src={images[(activeIndex + 2) % images.length]}
              className="absolute w-[92%] h-[92%] object-cover rounded-2xl shadow-2xl rotate-[-4deg] translate-x-[-15px] translate-y-[10px] opacity-60"
              aria-hidden
            />

            {/* Front flip */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                alt="Construction Project"
                className="absolute w-full h-full object-cover rounded-2xl shadow-2xl"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              />
            </AnimatePresence>

            {/* ISO Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">ISO</div>
                <div className="text-xs text-gray-600">Certified</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
