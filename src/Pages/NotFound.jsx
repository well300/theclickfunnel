import { motion } from "framer-motion";
import Button from "../Reusable/Button.jsx";
import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowError(true), 500);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center bg-[#131313] text-white px-2 overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]"></div>
      
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center items-center gap-3"
        >
          <AlertTriangle size={50} className="text-yellow-400" />
          <h1 className="text-5xl font-bold">404</h1>
        </motion.div>

        <motion.p 
          className="mt-4 text-gray-300 text-lg max-w-lg mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          Oops! The page you are looking for does not exist.
        </motion.p>

        {showError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="mt-6"
          >
            <Button to="/" className="bg-white text-[#131313] hover:bg-[#131313] hover:text-white transition-all w-full md:w-auto" text="Go Home" />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default NotFound;
