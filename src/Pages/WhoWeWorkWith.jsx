import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const WhoWeWorkWith = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default open first item

  const situations = [
    {
      id: "01",
      title: "Businesses That Have Outgrown Their Current Tools",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      content: "A spreadsheet-based process that worked for ten clients does not work for a hundred. A system that was built for one location does not scale cleanly to five. The business has grown and the software has not kept up. We assess what is there and what needs to change to support where the business is going."
    },
    {
      id: "02",
      title: "Businesses With Software That Was Never Quite Right",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
      content: "It was delivered, the vendor was paid, the project was officially closed - and the system has not worked the way it was supposed to since day one. We look at what is there without bias toward any particular fix and address the actual problem."
    },
    {
      id: "03",
      title: "Businesses Carrying Technical Debt From Earlier Decisions",
      image: "https://images.unsplash.com/photo-1607799279861-4dd93b8e8f9b?auto=format&fit=crop&w=1600&q=80",
      content: "Early technology choices that made sense at the time and are now causing friction. A framework that is no longer maintained. A database structure that made sense for an earlier version of the product and is now a constraint. We deal with this kind of accumulated technical debt in a structured way that does not require rebuilding everything at once."
    },
    {
      id: "04",
      title: "Businesses That Need a Reliable Technical Partner Without an Internal Team",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
      content: "Not every business is at the stage where a full in-house engineering team makes sense. We work with businesses that need consistent, reliable technical support and want a partner who knows their systems well rather than a different vendor every time something comes up."
    }
  ];

  return (
    <div className="bg-[#050505] text-white relative z-10 min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* MASSIVE TYPOGRAPHY HERO */}
      <section className="pt-48 pb-32 px-6 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          <div className="lg:w-2/3">
            <h1 className="text-6xl md:text-[8rem] xl:text-[10rem] font-black tracking-tighter leading-[0.85] text-white uppercase">
              WHO <br />
              <span className="text-zinc-700">WE WORK</span> <br />
              WITH.
            </h1>
          </div>
          
          <div className="lg:w-1/3 pb-4">
            <p className="text-xl md:text-2xl font-medium text-zinc-400 leading-relaxed">
              Arktantra works with businesses across Maharashtra and across India on software engagements that range from focused fixes to multi-month development projects. The size of the company matters less than the nature of the problem.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FULL-WIDTH INTERACTIVE ACCORDION (The "Wow" Factor) */}
      <section className="px-6 pb-40 max-w-[1400px] mx-auto">
        <div className="mb-16 border-b border-zinc-800 pb-6">
          <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
            The Kinds of Situations We Handle Well
          </h2>
        </div>

        <div className="border-t border-zinc-800">
          {situations.map((item, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-zinc-800 overflow-hidden group cursor-pointer"
                onClick={() => setExpandedIndex(isOpen ? null : index)}
              >
                {/* Accordion Header */}
                <div className="py-8 md:py-12 flex items-start md:items-center justify-between gap-8 hover:bg-[#0a0a0a] transition-colors duration-500 px-4 -mx-4">
                  <div className="flex items-start md:items-center gap-8 md:gap-16 w-full">
                    <span className="text-2xl md:text-4xl font-light text-zinc-600 shrink-0">
                      {item.id}
                    </span>
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight transition-colors duration-500 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="shrink-0 mt-2 md:mt-0">
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }} 
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-white border-white text-black' : 'border-zinc-700 text-white group-hover:border-zinc-400'}`}
                    >
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </motion.div>
                  </div>
                </div>

                {/* Accordion Content (Smooth Expand/Collapse) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-4 px-4 -mx-4 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                        {/* Text Block */}
                        <div className="lg:w-1/2 lg:pl-32">
                          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium">
                            {item.content}
                          </p>
                        </div>
                        
                        {/* Cinematic Image Reveal */}
                        <div className="lg:w-1/2 w-full h-[300px] md:h-[400px] relative overflow-hidden rounded-2xl">
                          <motion.img 
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent opacity-60" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* EDITORIAL SECTION: PURE CONTRAST */}
      <section className="py-40 px-6 bg-white text-black relative rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-16 lg:gap-32"
          >
            {/* Left Header */}
            <div className="lg:w-1/3">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] sticky top-32 uppercase">
                WHAT WE <br />
                <span className="text-zinc-400">ASK FROM</span> <br />
                CLIENTS.
              </h2>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3 space-y-12">
              <p className="text-2xl md:text-4xl font-medium leading-[1.4] tracking-tight">
                A good software engagement requires genuine participation from both sides. We ask for timely feedback during development - not instant responses, but decisions made within the timeframes we agree on. We ask for access to the people who actually use the systems, not just the people who commissioned them. And we ask for direct communication when something is not working as expected rather than letting problems accumulate.
              </p>
              
              <div className="w-full h-[1px] bg-zinc-300 my-8" />
              
              <p className="text-xl md:text-3xl font-medium leading-[1.5] text-zinc-600 tracking-tight">
                We operate the same way on our end. If there is a problem, we raise it. If a timeline is at risk, we say so early. If what was originally scoped is not going to solve the problem, we tell you before we build it.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default WhoWeWorkWith;