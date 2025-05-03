import { motion } from "framer-motion";
import TextMaskAnimation from "./TextMaskAnimation";
import { Home, Heart, DollarSign, Globe, Calendar, Briefcase, Users, Gift, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import RotatingLabels from "./RotatingLabels.jsx";

const labels = [
  { text: "E-Commerce", color: "#1E90FF", icon: <Home size={16} /> },
  { text: "Edu-Tech", color: "#FF6347", icon: <Heart size={16} /> },
  { text: "Health-Tech", color: "#32CD32", icon: <DollarSign size={16} /> },
  { text: "Fin-Tech", color: "#FFD700", icon: <Briefcase size={16} /> },
  { text: "Logistics", color: "#228B22", icon: <Truck size={16} /> },
  { text: "Travel & Tourism", color: "#FFD700", icon: <Globe size={16} /> },
  { text: "Sports Tech", color: "#FF4500", icon: <Calendar size={16} /> },
  { text: "Non-Profit", color: "#8A2BE2", icon: <Users size={16} /> },
  { text: "Food & Beverage", color: "#FF1493", icon: <Gift size={16} /> },
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
    <section className="relative w-full h-[95vh] flex flex-col items-center bg-black overflow-hidden px-2">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]"></div>

      {/* Content */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col gap-4 text-white z-10 mt-auto pb-6">

        {/* Main Bottom Content */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end w-full mt-auto">
          {/* Left Side */}
          <div className="w-full md:w-auto">
            <TextMaskAnimation />
          </div>

          {/* Right Side */}
          <motion.p
            className="w-full max-w-lg text-gray-300 text-lg text-left mt-4 md:mt-0 md:text-right md:absolute md:bottom-0 md:right-0"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            Transforming ideas into impactful narratives. Resonating with your audience through storytelling, branding, and strategy.
          </motion.p>
        </div>

        {/* Rotating Labels */}
        <RotatingLabels labels={labels} />
      </div>
    </section>
  );
};

export default Hero;
