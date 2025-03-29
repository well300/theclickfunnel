import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";


const About = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
<section className="relative w-full  flex flex-col items-center bg-white overflow-hidden px-2 py-8 sm:py-12">
<div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col lg:flex-row gap-12 items-center mb-">
        {/* Text Content - Left Side */}
        <div className="lg:w-1/2">
          {/* About Span Section */}
          <div className="text-left mb-2">
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{
                opacity: headingInView ? 1 : 0,
                filter: headingInView ? "blur(0px)" : "blur(8px)",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-sm font-semibold text-[#131313] uppercase inline-block text-left sm:text-center md:text-left leading-none border border-gray-400 px-3 py-1 rounded-md">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131313] pt-4">
                Creative Madness
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-md sm:text-lg text-gray-700"
            >
              At Creative Madness, we're not just about making cool things, we're about redefining what's possible in the world of design, technology, and creativity. 
              We challenge the norm, break boundaries, and help our community tap into their full creative potential.
            </motion.p>
          </div>

          {/* Mission Section */}
          <div ref={missionRef}>
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{
                opacity: missionInView ? 1 : 0,
                filter: missionInView ? "blur(0px)" : "blur(8px)",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#131313] mt-4">
                Our Mission
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: missionInView ? 1 : 0, y: missionInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-md sm:text-lg text-gray-700"
              >
                Our mission is to empower creators, designers, and innovators by providing them with the tools, inspiration, and platform they need to thrive.
                We aim to build a global community of like-minded individuals who dare to dream big and push the boundaries of creativity.
              </motion.p>
            </motion.div>

            <Button
              to="/join"
              className="bg-[#131313] text-white hover:text-white transition-all w-full md:w-auto mt-6"
              text="Join Community"
            />
          </div>
        </div>

      {/* Image - Right Side */}
<motion.div 
  className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] min-h-[300px]"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: headingInView ? 1 : 0, x: headingInView ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
  <img
    src="https://i.pinimg.com/736x/d4/3c/14/d43c14f4cb9e2fec332d61738bfa3790.jpg"
    alt="Creative Madness"
    className="object-cover rounded-lg w-full h-full"
  />
</motion.div>

      </div>
    </section>
  );
};

export default About;
