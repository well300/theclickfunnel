import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";

const PastEvents = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const events = [
    {
      id: 1,
      title: "Growth Marketing Summit",
      audience: "Marketers",
      date: "November 8, 2024",
      description: "Advanced strategies for customer acquisition and retention in digital markets.",
      image: "https://i.pinimg.com/originals/34/11/5f/34115f4391f47603a5381a9f484f4f73.gif"
    },
    {
      id: 2,
      title: "Design Thinking Workshop",
      audience: "Design Thinkers",
      date: "September 14, 2024",
      description: "Human-centered design methodologies for solving complex problems.",
      image: "https://i.pinimg.com/originals/e5/6f/a0/e56fa04f17efdd50330285330b82d3fc.gif"
    },
    {
      id: 3,
      title: "UX/UI Masterclass",
      audience: "UI/UX Designers",
      date: "July 22, 2024",
      description: "Deep dive into interaction design patterns and user research techniques.",
      image: "https://i.pinimg.com/originals/a4/5b/99/a45b9954220ee5801c17403e770cf823.gif"
    },
    {
      id: 4,
      title: "Content Creation Lab",
      audience: "Content Creators",
      date: "May 5, 2025",
      description: "Storytelling frameworks and visual content strategies for digital platforms.",
      image: "https://i.pinimg.com/originals/d9/11/1b/d9111be911dd2f932a5242cf958d336e.gif"
    }
  ];

  return (
    <section className="relative w-full flex flex-col items-center bg-white overflow-hidden px-2 py-8 sm:py-12">
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        
        {/* Title Section */}
        <div className="text-left mb-8 sm:mb-12" ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{
              opacity: titleInView ? 1 : 0,
              filter: titleInView ? "blur(0px)" : "blur(8px)",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-[#131313] uppercase inline-block border border-gray-400 px-3 py-1 rounded-md">
              Community Events
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131313] pt-4">
              Past Events
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-md sm:text-lg text-gray-700 mt-4 max-w-3xl"
            >
              We host specialized events for creative professionals across disciplines. 
              Here are some highlights from our recent gatherings.
            </motion.p>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => {
            const [cardRef, cardInView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
            });

            return (
              <motion.div
                key={event.id}
                ref={cardRef}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ 
                  opacity: cardInView ? 1 : 0, 
                  y: cardInView ? 0 : 30,
                  filter: cardInView ? "blur(0px)" : "blur(8px)"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative group">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 right-2 bg-[#131313] text-white text-xs font-medium px-2 py-1 rounded">
                    {event.audience}
                  </span>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-[#131313] mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;