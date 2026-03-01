import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, 
  Wrench, 
  Network, 
  RefreshCcw, 
  ShieldCheck, 
  MessageSquarePlus, 
  Briefcase, 
  Clock, 
  CalendarSync
} from 'lucide-react';

const TheWork = () => {
  // Scroll To Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const workSections = [
    {
      id: "01",
      title: "Custom Development",
      icon: <Code2 className="w-8 h-8 text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      content: [
        "There is a category of business requirements that existing software products simply do not cover. Not because the requirement is unusual - but because it is specific enough to your operation that a generic tool will always be a compromise.",
        "We handle these cases. The engagement always begins with a discovery phase where we map the requirement in detail before any development begins. What needs to happen, who will use it, what breaks if it does not work, what the edge cases are. A scope written after proper discovery is reliable. A scope written before it is an estimate dressed up as a commitment.",
        "Development happens in stages with regular reviews. You see working software throughout the project, not just at the end. Issues get caught and corrected while correction is still straightforward."
      ]
    },
    {
      id: "02",
      title: "Diagnosis and Repair",
      icon: <Wrench className="w-8 h-8 text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1000&q=80",
      content: [
        "Software problems are frequently misdiagnosed. A system that is running slowly gets blamed on the server. An integration that breaks gets blamed on the API. A report that produces wrong numbers gets blamed on data entry. The actual cause is usually somewhere else - in how the system was built, in an assumption that stopped being true, in a dependency that changed quietly in the background.",
        "We come in without assumptions. We look at what is actually happening, trace it to its source, and fix that - not the symptom sitting on top of it. We also document what we found and what we changed, so there is a clear record of the work."
      ]
    },
    {
      id: "03",
      title: "Integration Work",
      icon: <Network className="w-8 h-8 text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      content: [
        "The most common source of operational inefficiency we encounter is not bad software. It is software that does not connect to other software. Good tools that were each purchased separately to solve separate problems, and now someone's job is to be the human bridge between them.",
        "We build these connections properly. The approach depends on what is involved - some integrations use direct APIs, some need a middleware layer, some are better handled through scheduled automation. The goal is always that data moves accurately and automatically, and that the person who used to maintain it manually can spend that time on something more useful."
      ]
    },
    {
      id: "04",
      title: "Modernisation",
      icon: <RefreshCcw className="w-8 h-8 text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
      content: [
        "Software that has been in production for several years accumulates problems that are not always visible from the outside. The interface is slow. Certain functions are brittle. Making changes to one part of the system breaks something in another. The people who originally built it are no longer around and the codebase is poorly documented.",
        "Replacing it entirely risks losing embedded logic that nobody has written down anywhere. Leaving it as is has growing costs. We handle the middle path - assessing what is there carefully, separating what works from what needs to change, and improving the system in stages that keep it operational throughout."
      ]
    },
    {
      id: "05",
      title: "Maintenance Contracts",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
      content: [
        "Software in active use needs ongoing attention. Security vulnerabilities get disclosed. Dependencies become outdated. Small bugs accumulate. Requirements shift as the business shifts. For clients who want this handled reliably without hiring internally, we offer monthly arrangements covering regular upkeep, fixes, and minor updates.",
        "We also take on maintenance of systems built by other vendors. We review the codebase before agreeing to take it on and are direct about what we find - including the implications for the work involved going forward."
      ]
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-300 relative z-10 min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* HERO SECTION - MASSIVE TYPOGRAPHY */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[60vh]">
        {/* Parallax Grid Background */}
        <motion.div 
          style={{ y: yBackground }}
          className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/80 to-zinc-950 z-0" />

        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Our Expertise
          </div>
          <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-8 leading-none">
            THE WORK.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            A detailed breakdown of what Arktantra handles and how we approach each type of engagement.
          </p>
        </motion.div>
      </section>

      {/* STICKY SCROLL SECTIONS */}
      <section className="relative px-6 pb-32 max-w-7xl mx-auto">
        <div className="space-y-32">
          {workSections.map((section, index) => (
            <div key={index} className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              
              {/* Giant Background Number */}
              <div className="absolute -top-20 left-0 text-[15rem] font-black text-white/[0.02] tracking-tighter pointer-events-none select-none z-0">
                {section.id}
              </div>

              {/* STICKY LEFT COLUMN */}
              <div className="lg:col-span-5 lg:sticky top-32 z-10 space-y-6">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                  className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg shadow-emerald-900/20"
                >
                  {section.icon}
                </motion.div>
                <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                >
                  {section.title}
                </motion.h2>
              </div>

              {/* SCROLLING RIGHT COLUMN (Content + Image) */}
              <div className="lg:col-span-7 relative z-10">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                  className="space-y-6 text-zinc-400 text-lg leading-relaxed mb-10 bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm"
                >
                  {section.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </motion.div>

                {/* Cinematic Image Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}
                  className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-zinc-800 group"
                >
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* MODERN BENTO GRID FOR PRICING */}
      <section className="py-32 px-6 bg-black border-y border-zinc-800/50 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Pricing and Engagement</h2>
            <p className="text-zinc-500 text-lg">How we structure our work together.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-10 rounded-3xl hover:border-zinc-600 transition-colors group relative overflow-hidden"
            >
              <Briefcase className="w-10 h-10 text-emerald-500 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Project-Based</h3>
              <p className="text-zinc-400 leading-relaxed text-lg max-w-xl">
                Scope and price agreed before work begins. Used when requirements are clearly defined after discovery. You know exactly what you are getting and what it costs.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl hover:border-zinc-600 transition-colors"
            >
              <Clock className="w-10 h-10 text-emerald-500 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Time and Materials</h3>
              <p className="text-zinc-400 leading-relaxed text-base">
                Used for work where the full scope needs to emerge through the process - which is honest for a certain class of problems. Billing is transparent and reviewed regularly.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-3 bg-zinc-900 border border-zinc-800 p-10 rounded-3xl hover:border-zinc-600 transition-colors flex flex-col md:flex-row items-start md:items-center gap-8 justify-between"
            >
              <div>
                <CalendarSync className="w-10 h-10 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Monthly Arrangements</h3>
                <p className="text-zinc-400 leading-relaxed text-lg max-w-3xl">
                  For ongoing maintenance and support. Sized to actual need - not a standard package that includes capacity you will not use.
                </p>
              </div>
              <Link to="/contact" onClick={scrollToTop}>
                <motion.button 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="whitespace-nowrap bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all"
                >
                  Discuss Maintenance
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10">
          <Link to="/contact" onClick={scrollToTop}>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-emerald-500 text-black px-12 py-6 rounded-full font-bold text-lg tracking-wide shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] hover:bg-emerald-400 transition-all duration-300"
            >
              <MessageSquarePlus className="w-6 h-6" />
              Start a Conversation
            </motion.button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default TheWork;