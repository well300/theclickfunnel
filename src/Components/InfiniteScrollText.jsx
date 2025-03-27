import { motion } from "framer-motion";
import { SiAdobe, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign } from "react-icons/si";

const InfiniteScrollText = () => {
  const items = [
    { text: "We design experiences that users remember", icon: SiAdobe },
    { text: "Every pixel tells a story", icon: SiFigma },
    { text: "UI is the bridge between humans and tech", icon: SiAdobephotoshop },
    { text: "Design transforms complexity into clarity", icon: SiAdobeillustrator },
    { text: "Creativity fuels innovation", icon: SiAdobeindesign },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-2 sm:py-6">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap text-xl sm:text-4xl font-bold text-[#131313] items-center"
          animate={{
            x: ["-100%", "0%"], // Infinite right scroll
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex">
              {items.map(({ text, icon: Icon }, index) => (
                <p key={`${i}-${index}`} className="mr-6 sm:mr-8 flex items-center">
                  {text}
                  <Icon className="ml-4 sm:ml-10 text-[#131313] w-8 h-8 sm:w-14 sm:h-14" />
                </p>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays to hide edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  );
};

export default InfiniteScrollText;
