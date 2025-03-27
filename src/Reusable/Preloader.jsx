import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiAdobe, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiSketch } from "react-icons/si";

const icons = [SiAdobe, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiSketch];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length); // Loop through icons
    }, 500); // Change icon every 500ms

    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500); // Start fade-out animation at 2.5s

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 3000); // Preloader disappears at 3s

    return () => {
      clearInterval(iconInterval);
      clearTimeout(fadeOutTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!isLoading) return null;

  const CurrentIcon = icons[index];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#131313] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Smooth fade-out
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentIcon className="text-white w-20 h-20 sm:w-28 sm:h-28" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
