import { motion } from "framer-motion";
import { SiAdobe, SiFigma, SiGoogle, SiApple, SiAmazon, SiNetflix, SiSpotify, SiTesla, SiNike } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const InfiniteScrollText = () => {
  const companies = [
    { icon: SiAdobe, name: "Adobe", color: "#FF0000" }, // Red
    { icon: SiFigma, name: "Figma", color: "#0072F5" }, // Blue
    { icon: SiGoogle, name: "Google", color: "#4285F4" }, // Google Blue
    { icon: FaMicrosoft, name: "Microsoft", color: "#00A4EF" }, // Microsoft Blue
    { icon: SiAmazon, name: "Amazon", color: "#FF9900" }, // Amazon Orange
    { icon: SiTesla, name: "Tesla", color: "#E82127" }, // Tesla Red
    { icon: SiSpotify, name: "Spotify", color: "#1DB954" }, // Spotify Green
    { icon: SiNetflix, name: "Netflix", color: "#E50914" }, // Netflix Red
    { icon: SiNike, name: "Nike", color: "#111111" }, // Nike Black
    { icon: SiApple, name: "Apple", color: "#A2AAAD" }, // Apple Gray
  ];

  // Duplicate for seamless looping (3 sets for smoother transition)
  const scrollingItems = [...companies, ...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden bg-white rounded-t-4xl py-6 sm:py-10">
      <motion.div
        className="text-center mb-4 sm:mb-6 px-4"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-black leading-snug">
          <div>Empowering emerging startups, creators,</div>
          <div>and visionaries to pitch with clarity and confidence</div>
        </h2>
      </motion.div>

      <div className="relative h-[120px] sm:h-[140px] flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["-66.66%", "0%"], // Smoother loop with 3 duplicates
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 45, // Slower scroll (45 seconds)
            ease: "linear",
          }}
        >
          {scrollingItems.map(({ icon: Icon, name, color }, index) => (
            <div
              key={`item-${index}`}
              className="mx-4 sm:mx-6 flex flex-col items-center min-w-[95px] sm:min-w-[110px]"
            >
              {/* Apply color to icon dynamically */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Icon
                  className="w-12 h-12 sm:w-12 sm:h-12 transition-opacity hover:opacity-80"
                  style={{ color }} // Apply the dynamic color here
                />
              </motion.div>
              <span className="mt-2 text-xs sm:text-sm text-gray-500 font-medium">{name}</span>
            </div>
          ))}
        </motion.div>

        {/* Stronger gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white to-transparent z-14" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white via-white to-transparent z-14" />
      </div>
    </div>
  );
};

export default InfiniteScrollText;
