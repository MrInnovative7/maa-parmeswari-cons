import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.png";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            
            {/* ✅ Company Logo */}
            <motion.img
              src={logo}
              alt="Maa Parmeswari Cons Pvt. Ltd."
              className="w-24 h-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* ✅ Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-semibold text-gray-800 tracking-wide"
            >
              Maa Parmeswari Cons Pvt. Ltd.
            </motion.div>

            {/* ✅ Animated Loading Dots */}
            <div className="flex gap-2 mt-2">
              {[0, 1, 2].map((index) => (
                <motion.span
                  key={index}
                  className="w-3 h-3 bg-blue-600 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
