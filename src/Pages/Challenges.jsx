import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";

const challenges = [
    {
      title: "Pixel Rescue",
      description: "Revamp a poorly designed UI in just 10 minutes with a fresh concept.",
      color: "#FF5E5B", // Coral
      pattern: "diagonal-stripes"
    },
    {
      title: "Brand Storm",
      description: "Create a logo, color scheme, and tagline for a random business in 60 seconds.",
      color: "#FFED66", // Yellow
      pattern: "zigzag"
    },
    {
      title: "Monochrome Masterpiece",
      description: "Design a stunning UI using only shades of a single color.",
      color: "#00CECB", // Teal
      pattern: "dots"
    }
];

const Challenges = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Pattern components
  const Pattern = ({ type, color }) => {
    switch(type) {
      case "diagonal-stripes":
        return (
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <pattern id="diagonal-stripes" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="10" height="20" fill={color} />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
          </svg>
        );
      case "dots":
        return (
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill={color} />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        );
      case "zigzag":
        return (
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <pattern id="zigzag" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 20L10 0L20 20" stroke={color} strokeWidth="2" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#zigzag)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center bg-white overflow-hidden px-2 py-8 sm:py-12">
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col lg:flex-row gap-12 items-center mb-6 mt-14">
        {/* Left Side */}
        <div className="lg:w-1/2 text-left">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: headingInView ? 1 : 0, filter: headingInView ? "blur(0px)" : "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-[#131313] uppercase inline-block border border-gray-400 px-3 py-1 rounded-md">
              Challenges
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131313] pt-4">
              Creative Madness Challenges
            </h2>
            <p className="text-md sm:text-lg text-gray-700 mt-4">
            Unleash your creativity like never before with these fast, high-energy design challenges. Push your limits, think outside the box, and create something incredible in just minutes. Whether you're redesigning a bad UI, reverse-engineering a user flow, or building a brand in 60 seconds, each challenge will test your skills and fuel your creative genius. Get ready to innovate, experiment, and bring bold ideas to life!</p>
          </motion.div>
          <Button 
            to="/join-challenges" 
            className="bg-[#131313] text-white hover:text-white hover:bg-opacity-90 transition-all mt-6 group"
            text={
              <span className="flex items-center">
                Join Challenges
              </span>
            } 
          />
        </div>

        {/* Right Side - Challenges */}
        <div ref={cardsRef} className="lg:w-1/2 grid gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg overflow-hidden transition-all duration-300"
              style={{ backgroundColor: challenge.color }}
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ 
                opacity: cardsInView ? 1 : 0, 
                filter: cardsInView ? "blur(0px)" : "blur(8px)",
                y: cardsInView ? 0 : 20
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
            >
              {/* Background pattern */}
              <Pattern type={challenge.pattern} color="#131313" />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#131313]">{challenge.title}</h3>
                <p className="text-md text-[#131313] mt-2 opacity-90">{challenge.description}</p>
                
                {/* Corner accent (static) */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-[#131313] border-l-transparent opacity-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;