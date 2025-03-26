import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Users, X, Menu, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu on resize and lock body scroll when open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Track scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] z-50 
      transition-all duration-300 rounded-2xl shadow-lg 
      ${isScrolled ? "bg-white/90 backdrop-blur-lg" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 relative">
          {/* Logo */}
          <Link to="/" className="z-50">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 md:h-12 transition-all duration-300 hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-1 font-medium transition-colors duration-300 text-sm lg:text-base ${
                    location.pathname === link.path 
                      ? "text-[#131313] font-semibold" 
                      : "text-gray-600 hover:text-[#131313]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button - Right */}
          <div className="hidden md:block">
            <Link
              to="/join"
              className="flex items-center space-x-2 bg-[#131313] text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm lg:text-base"
            >
              <Users size={18} />
              <span>Join Community</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 z-50"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-800 stroke-2" />
            ) : (
              <Menu size={24} className="text-gray-800 stroke-2" />
            )}
          </button>

          {/* Mobile Navigation - Full width dropdown */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="absolute left-[-5%] right-[-5%] top-full w-[110%] bg-white shadow-xl z-40 mt-2 rounded-2xl overflow-hidden"
    >
      <div className="flex flex-col p-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`py-3 px-4 rounded-lg transition-colors duration-300 font-medium text-center ${
              location.pathname === link.path
                ? "bg-gray-100 text-[#131313]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/join"
          className="mt-2 flex items-center justify-center space-x-2 bg-[#131313] text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          <Users size={18} />
          <span>Join Community</span>
        </Link>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition-colors duration-300">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
