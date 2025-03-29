import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";

const CreativeCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#131313] py-16"
    >
      <div className="w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center"
        >
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left max-w-2xl lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-sm font-semibold text-[#131313] uppercase inline-block leading-none border border-gray-400 px-3 py-1 rounded-md mb-4">
                Join Our Community
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131313] mb-4">
                <span className="block">Tell us about your Creativity</span>
                <span className="block">Let's Enjoy together</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Become part of our growing community of creators and innovators.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                to="/join"
                className="bg-[#131313] text-white hover:bg-black transition-all"
                text="Join Us Today"
              />
          <Button
  to="/contact"
  className="border border-[#131313] text-[#131313] bg-transparent hover:bg-[#131313] hover:text-white transition-all"
  text="Learn More"
/>

            </motion.div>
          </div>

          {/* Right Side - Image (Takes up more space) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full lg:w-[50%] mt-8 lg:mt-0 lg:ml-auto flex justify-end"
          >
            <img
              src="https://i.pinimg.com/736x/7c/41/59/7c41599b40487cdcd8ae983ee85e1085.jpg"
              alt="Creative Community"
              className="w-full max-h-[300px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CreativeCTA;
