import { motion } from "framer-motion";

const RotatingLabels = ({ labels }) => {
  return (
    <div className="mt-2 w-full overflow-hidden relative">
      {/* Enhanced gradient overlays with subtle animation */}
      <motion.div 
        className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#131313] via-[#131313] to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#131313] via-[#131313] to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <motion.div
        className="flex whitespace-nowrap py-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          x: ["0%", "-100%"],
          y: 0,
          opacity: 1
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          },
          y: {
            duration: 0.6,
            ease: "easeOut"
          },
          opacity: {
            duration: 0.8
          }
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {labels.map((label, index) => (
              <motion.div
                key={`${i}-${index}`}
                className="flex items-center group mx-1"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 }
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  scale: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.span 
                  className="text-sm sm:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden"
                  style={{ 
                    color: label.color,
                    backgroundColor: `${label.color}15`
                  }}
                  whileHover={{
                    backgroundColor: `${label.color}30`,
                    boxShadow: `0 0 12px ${label.color}40`
                  }}
                >
                  {/* Animated background highlight on hover */}
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 0.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  {label.text}
                </motion.span>
                
             
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RotatingLabels;