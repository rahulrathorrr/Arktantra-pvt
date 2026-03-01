import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Work', path: '/the-work' },
    { name: 'Our Approach', path: '/our-approach' },
    { name: 'Who We Work With', path: '/who-we-work-with' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6 flex justify-center pointer-events-none"
    >
      <nav className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-6 py-4 rounded-full transition-all duration-500 border ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-zinc-800 shadow-2xl' : 'bg-transparent border-transparent'}`}>
        
        {/* LOGO + BRAND TEXT */}
        <Link to="/" onClick={handleNavClick} className="flex items-center gap-3 group">
          <svg width="24" height="30" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:-translate-y-0.5">
            <path d="M10 110L50 10V40L10 80V110Z" fill="white"/>
            <path d="M90 110L50 10V40L90 80V110Z" fill="white"/>
            <circle cx="50" cy="15" r="8" fill="white" className="animate-pulse"/>
          </svg>
          <span className="text-white font-black tracking-tighter text-2xl uppercase">ARKTANTRA</span>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} onClick={handleNavClick} className="relative px-5 py-2.5" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              {hoveredIndex === index && <motion.div layoutId="nav-hover" className="absolute inset-0 bg-zinc-800/80 rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
              <span className={`text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${location.pathname === link.path || hoveredIndex === index ? 'text-white' : 'text-zinc-400'}`}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;