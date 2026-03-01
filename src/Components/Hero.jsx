import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Tagda blur-in animation
  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24 px-6">
      
      {/* Pulsating Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500 blur-[150px] rounded-full pointer-events-none" 
      />

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-8 leading-[1.05]"
        >
          We Fix What<br />
          Others Could Not.
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-zinc-300 text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-6"
        >
          Arktantra handles software problems that have been sitting too long - systems that do not perform, tools that do not connect, applications that were delivered but never quite worked right. We come in, look at the actual situation, and deal with it.
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-zinc-500 text-base md:text-lg max-w-2xl leading-relaxed mb-14"
        >
          No lengthy proposals before we understand the problem. No vague timelines. No disappearing after handover.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 bg-white text-black px-9 py-4 rounded-full font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all duration-500"
            >
              <Wrench className="w-4 h-4 text-zinc-800" />
              Describe Your Problem
            </motion.button>
          </Link>

          <Link to="/the-work">
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md text-white border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800 px-9 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-500 shadow-lg"
            >
              See Our Work
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;