import { motion } from "framer-motion";
import TextMaskAnimation from "./TextMaskAnimation";
import Button from "../Reusable/Button.jsx";
import { Shapes } from "lucide-react";

const labels = [
  { text: "Marketers", y: -30, color: "#0072F5" },
  { text: "Growth Marketers", y: -50, color: "#D24D57" },
  { text: "Design Thinkers", y: -20, color: "#FF8C00" },
  { text: "Fashion Designers", y: -40, color: "#22C55E" },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[82vh] flex flex-col items-center bg-[#131313] overflow-hidden px-2">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]"></div>

      {/* Content */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col gap-4 text-white z-10 mt-auto pb-8">
        
        {/* Floating Labels - Hidden on mobile */}
        <motion.div 
          className="hidden md:flex absolute top-23 right-1 flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {labels.map((label, index) => (
            <motion.div
              key={index}
              className="bg-white backdrop-blur-sm border border-white text-white text-sm font-medium px-4 py-1 rounded-lg shadow-lg flex items-center justify-center min-w-[140px]"
              initial={{ 
                opacity: 0,
                y: -20,
                scale: 0.95,
                filter: "blur(4px)"
              }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
                scale: 1,
                filter: "blur(0px)"
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                },
                opacity: {
                  duration: 0.6,
                  delay: index * 0.15
                },
                scale: {
                  duration: 0.5,
                  delay: index * 0.15
                },
                filter: {
                  duration: 0.8,
                  delay: index * 0.15
                }
              }}
              style={{ color: label.color }}
            >
              {label.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Title */}
        <TextMaskAnimation />

        {/* Button & Supporting Text */}
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