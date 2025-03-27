import { motion } from "framer-motion";
import TextMaskAnimation from "./TextMaskAnimation";
import Button from "../Reusable/Button.jsx";
import { Shapes, Circle, ArrowRight, Sparkles, PenTool } from "lucide-react";
import { useEffect, useState } from "react";
import RotatingLabels from "./RotatingLabels.jsx";

const labels = [
  { text: "Marketers", color: "#0072F5", icon: <Sparkles size={16} /> },
  { text: "Growth Marketers", color: "#D24D57", icon: <ArrowRight size={16} /> },
  { text: "Design Thinkers", color: "#FF8C00", icon: <PenTool size={16} /> },
  { text: "Fashion Designers", color: "#22C55E", icon: <Circle size={16} /> },
  { text: "Product Managers", color: "#0A84FF", icon: <ArrowRight size={16} /> },
  { text: "UI/UX Designers", color: "#FFD700", icon: <Sparkles size={16} /> },
  { text: "Content Creators", color: "#FF69B4", icon: <PenTool size={16} /> },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center bg-[#131313] overflow-hidden px-2">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]"></div>

      {/* Content */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col gap-4 text-white z-10 mt-auto pb-6">
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

        {/* Infinite Scrolling Labels at Bottom */}
        <RotatingLabels labels={labels} />
      </div>
    </section>
  );
};

export default Hero;