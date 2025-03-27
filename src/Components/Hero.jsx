import TextMaskAnimation from "./TextMaskAnimation";
import Button from "../Reusable/Button.jsx";
import { Shapes, Figma, Brush, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const labels = [
  { text: "Product Manager", x: -60, y: -30 },
  { text: "UX Designer", x: 20, y: -50 },
  { text: "Graphic Designer", x: 80, y: -20 },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-[#131313] overflow-hidden px-4">
      {/* Background Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]">
      </div>

      {/* Content */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col gap-4 text-white z-10 mt-auto pb-8">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold text-white uppercase inline-block text-left sm:text-center md:text-left leading-none border border-gray-400 px-3 py-1 rounded-md">
            Creative Madness
          </span>
        </motion.div>

        {/* Floating Icons with Labels */}
        <motion.div
          className="hidden sm:flex absolute top-70 right-10 flex-row gap-6"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          {[Figma, Brush, PenTool].map((Icon, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.2 }}
            >
              {/* Floating Label */}
              <motion.div
                className="absolute -top-6 bg-white text-[#131313] text-xs font-semibold px-2 py-1 rounded-md shadow-md flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: labels[index].y }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                {labels[index].text}
                <motion.div 
                  className="w-2 h-2 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2" 
                />
              </motion.div>

              <Icon size={48} className="text-white opacity-80" />
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
}

export default Hero;
