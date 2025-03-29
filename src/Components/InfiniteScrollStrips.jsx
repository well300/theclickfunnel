import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowRight } from "lucide-react";

const InfiniteScrollStrip = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // Smoother scroll
    });

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"]);

  const messages = [
    // creativemaddness is a communty for creative designers 
    "Creativity is the essence of our community.",
    "We are a community of creative designers.",
    "We are a community of creative thinkers.",
    "We are a community of creative minds.",
    "We are a community of creative souls.",
    "We are a community of creative spirits.",
  ];

  return (
    <div 
      className="w-full bg-[#131313] py-10 overflow-hidden"
      ref={containerRef}
    >
      <motion.div 
        className="flex items-center whitespace-nowrap"
        ref={scrollRef}
        style={{ x: xTransform }}
      >
        {[...messages, ...messages].map((message, index) => (
          <div 
            key={`${index}-${message.substring(0, 5)}`} 
            className="flex items-center mx-8"
          >
            <span className="text-3xl md:text-4xl font-bold text-white">
              {message}
            </span>
            <ArrowRight className="ml-16 text-white w-8 h-8 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollStrip;