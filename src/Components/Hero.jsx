import TextMaskAnimation from "./TextMaskAnimation"; // Import the animation component
import Button from "../Reusable/Button.jsx";
import { Shapes, Figma, Brush, PenTool } from "lucide-react"; // Import design-related icons
import InfiniteScrollText from "./InfiniteScrollText"; // Import the infinite scroll text component

import { motion } from "framer-motion";

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

{/* Floating Icons (Visible only on larger screens) */}
<motion.div
  className="hidden sm:flex absolute top-70 right-10 flex-row gap-6"
  initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  >
    <Figma size={48} className="text-white opacity-80" />
  </motion.div>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }}
  >
    <Brush size={48} className="text-white opacity-80" />
  </motion.div>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.4 }}
  >
    <PenTool size={48} className="text-white opacity-80" />
  </motion.div>
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