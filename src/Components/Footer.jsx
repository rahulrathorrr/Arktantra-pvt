import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll ka feel dega
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Work', path: '/the-work' },
    { name: 'Our Approach', path: '/our-approach' },
    { name: 'Who We Work With', path: '/who-we-work-with' },
    { name: 'Contact', path: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-[#050505] text-white relative z-10 overflow-hidden border-t border-zinc-900 pt-24 md:pt-32">
      
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* TOP SECTION: Call to Action & Grids */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24 md:mb-32">
          
          {/* Left: Bold CTA */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8">
              HAVE A PROBLEM <br />
              <span className="text-zinc-600">WORTH SOLVING?</span>
            </h2>
            {/* Redirects to contact with scroll to top */}
            <Link to="/contact" onClick={scrollToTop}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-zinc-200 transition-colors"
              >
                Let's Talk
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>
            </Link>
          </div>

          {/* Right: Quick Links & Contact Details */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-12">
            
            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.path}
                      onClick={scrollToTop}
                      className="text-lg font-medium text-zinc-300 hover:text-white relative inline-block group"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="col-span-1">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Legal</h3>
              <ul className="space-y-4">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.path}
                      onClick={scrollToTop}
                      className="text-lg font-medium text-zinc-300 hover:text-white relative inline-block group"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Contact</h3>
              <div className="space-y-4 text-zinc-300 font-medium text-lg">
                <a href="mailto:Help@arktantrasoftware.in" className="block hover:text-white transition-colors">
                  Help@arktantrasoftware.in
                </a>
                <p className="leading-relaxed text-base text-zinc-400">
                  Office No D-208, Gini Bellina,<br />
                  Porwal Road, Lohogaon,<br />
                  Pune, MH - 411047
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Massive Brand Text */}
        <div className="relative w-full flex flex-col items-center justify-center border-t border-zinc-900 pt-8 pb-4">
          
          <div className="w-full flex flex-col md:flex-row items-center justify-between text-zinc-600 text-sm font-medium mb-4 px-2">
            <p>© {new Date().getFullYear()} Arktantra Private Limited.</p>
            <p>All rights reserved.</p>
          </div>

          {/* The Giant Typography */}
          <div className="w-full overflow-hidden select-none pointer-events-none flex justify-center">
            <h1 className="text-[15vw] leading-[0.75] font-black tracking-tighter text-white opacity-5 text-center w-full">
              ARKTANTRA
            </h1>
          </div>
          
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;