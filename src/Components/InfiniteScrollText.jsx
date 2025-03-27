import { motion } from "framer-motion";
import { SiAdobe, SiFigma, SiGoogle, SiApple, SiAmazon, SiNetflix, SiSpotify, SiTesla, SiNike } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const InfiniteScrollText = () => {
  const companies = [
    { icon: SiAdobe, name: "Adobe" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiGoogle, name: "Google" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: SiApple, name: "Apple" },
    { icon: SiAmazon, name: "Amazon" },
    { icon: SiNetflix, name: "Netflix" },
    { icon: SiSpotify, name: "Spotify" },
    { icon: SiTesla, name: "Tesla" },
    { icon: SiNike, name: "Nike" },
  ];

  // Duplicate for seamless looping (3 sets for smoother transition)
  const scrollingItems = [...companies, ...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden bg-white rounded-t-4xl py-6 sm:py-10">
      <div className="text-center mb-4 sm:mb-6 px-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
          <div>Connecting 1M+ designers</div>
          <div>from top companies worldwide</div>
        </h2>
      </div>
      
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
          {scrollingItems.map(({ icon: Icon, name }, index) => (
            <div 
              key={`item-${index}`}
              className="mx-4 sm:mx-6 flex flex-col items-center min-w-[95px] sm:min-w-[110px]"
            >
              <Icon className="text-[#131313] w-12 h-12 sm:w-12 sm:h-12 transition-opacity hover:opacity-80" />
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