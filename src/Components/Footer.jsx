import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";
import logo from "../assets/FullWhiteLogo.svg";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[#131313] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-8xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Twitmad Logo" 
                className="h-12 mr-2"
              />
            </div>
            <p className="text-gray-400">
              Redefining what's possible in design, technology, and creativity.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={20} />, name: 'twitter' },
                { icon: <Instagram size={20} />, name: 'instagram' },
                { icon: <Linkedin size={20} />, name: 'linkedin' },
                { icon: <Dribbble size={20} />, name: 'dribbble' }
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-gray-400  transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Our Community */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Our Community</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Challenges'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400  transition-colors cursor-pointer w-full text-left"
                  >
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'AI-Driven Growth Engine', url: 'https://twitmad.com' },
                { name: 'HyperROI Paid Advertising', url: 'https://twitmad.com' },
                { name: 'Disruptive Growth Lab', url: 'https://twitmad.com' }
              ].map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400  transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Spotify Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
<iframe 
//   id="spotify-player"
  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4o1oenSJRJd" 
  width="100%" 
  height="152" 
  frameBorder="0" 
  allow="encrypted-media" 
  className="rounded-lg"
  loading="lazy"
  title="Spotify Playlist"
/>

          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 my-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Creative Madness. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <div
             
              rel="noopener noreferrer"
            >
              This Community is under <a rel="noopener noreferrer" className=" text-white transition-colors" href="https://twitmad.com" 
              target="_blank"  >Twitmad</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;