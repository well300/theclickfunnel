import { motion } from "framer-motion";
import TextMaskAnimation from "./TextMaskAnimation";
import Button from "../Reusable/Button.jsx";
import { Shapes } from "lucide-react";
import { useEffect, useState } from "react";

const labels = [
  { text: "Marketers", y: -30, color: "#0072F5" },
  { text: "Growth Marketers", y: -50, color: "#D24D57" },
  { text: "Design Thinkers", y: -20, color: "#FF8C00" },
  { text: "Fashion Designers", y: -40, color: "#22C55E" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2000); // Change selection every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex flex-col items-center bg-[#131313] overflow-hidden px-2">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]"></div>

      {/* Content */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col gap-4 text-white z-10 mt-auto pb-8">
        
        {/* Floating Labels with Selection Cursor */}
        <motion.div 
          className="hidden md:flex absolute top-34 right-1 flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {labels.map((label, index) => (
            <motion.div
              key={index}
              className="relative bg-white border border-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-md shadow-sm flex items-center justify-center min-w-[120px] h-7"
              initial={{ 
                opacity: 0,
                y: -20,
                scale: 0.95,
                filter: "blur(4px)"
              }}
              animate={{
                opacity: 1,
                scale: activeIndex === index ? 1.05 : 1,
                filter: "blur(0px)",
                backgroundColor: activeIndex === index ? "#ffffff" : "#ffffff",
                borderColor: activeIndex === index ? label.color : "#e5e7eb"
              }}
              transition={{
                scale: { duration: 0.3 },
                backgroundColor: { duration: 0.3 },
                borderColor: { duration: 0.3 },
                opacity: { duration: 0.6, delay: index * 0.15 },
                filter: { duration: 0.8, delay: index * 0.15 }
              }}
              style={{ color: activeIndex === index ? label.color : "#4b5563" }}
            >
              {label.text}
              {/* Selection Cursor */}
              {activeIndex === index && (
                <motion.div
                  className="absolute -left-2 w-1.5 h-1.5 bg-current rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Rest of your component remains unchanged */}
        <TextMaskAnimation />
        <div className="flex flex-col md:flex-row md:items-center mt-2 justify-between gap-6">
          <Button
            to="/join"
            className="bg-white text-[#131313] hover:bg-[#131313] hover:text-white transition-all w-full md:w-auto"
            text="Join Community"
            icon={Shapes}
          />
          <motion.p
            className="max-w-lg text-gray-300 text-lg text-left sm:text-center md:text-right"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            This is where real creators connect, challenge the norm, and elevate their craft to the next level, together.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;