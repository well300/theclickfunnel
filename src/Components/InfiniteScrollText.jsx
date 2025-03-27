import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowRightCircle } from "lucide-react";

const InfiniteScrollText = () => {
  const textContainer = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
    });

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll({
    target: textContainer,
    offset: ["start end", "end start"],
  });

  // Text movement directions
  const xRed = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Red moves left
  const xWhite = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]); // White moves right

  return (
    <div className="relative">
      {/* Red Scrolling Section */}
      <motion.div
        ref={textContainer}
        className="relative overflow-hidden bg-red-400 py-2 sm:py-6 mb-8 sm:mb-12"
        style={{ rotate: "2deg", transformOrigin: "top right" }}
      >
        <motion.div
          style={{ x: xRed }}
          className="flex whitespace-nowrap text-xl sm:text-4xl font-bold text-[#131313] items-center"
        >
          <p className="mr-6 sm:mr-8 flex items-center">
          We design experiences that users remember
          <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
          <p className="mr-6 sm:mr-8 flex items-center">
          Every pixel tells a story
          <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
          <p className="mr-6 sm:mr-8 flex items-center">
          UI is the bridge between humans and tech
          <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
          <p className="mr-6 sm:mr-8 flex items-center">
          Design transforms complexity into clarity
          <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
        </motion.div>
      </motion.div>

      {/* White Scrolling Section */}
      <motion.div
        className="absolute top-0 left-0 w-full overflow-hidden bg-green-400 py-4 sm:py-6"
        style={{ rotate: "-2deg", transformOrigin: "top left" }}
      >
        <motion.div
          style={{ x: xWhite }}
          className="flex whitespace-nowrap text-xl sm:text-4xl font-bold text-[#131313] items-center"
        >
          <p className="mr-6 sm:mr-8 flex items-center">
            AI-driven strategies revolutionize engagement
            <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
          <p className="mr-6 sm:mr-8 flex items-center">
            Future-proof your business with smart marketing
            <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
          <p className="mr-6 sm:mr-8 flex items-center">
            Brands thrive in a fast-changing digital world
            <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
          <p className="mr-6 sm:mr-8 flex items-center">
            Data-driven insights maximize impact
            <ArrowRightCircle className="ml-4 sm:ml-10 text-black w-8 h-8 sm:w-14 sm:h-14" />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;