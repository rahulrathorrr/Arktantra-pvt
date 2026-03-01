import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Wrench, GitMerge, CheckCircle2, Mail, PhoneCall } from 'lucide-react';

const HomeSections = () => {
  // Scroll To Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-[#050505] text-zinc-300 relative z-10">
      
      {/* SECTION 1: THE WORK WE TAKE ON */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase mb-4">The Work We Take On</h2>
          <p className="text-2xl md:text-3xl font-medium text-white leading-snug">
            Arktantra operates across three broad areas of software work. Most client engagements fall into one of these — though the specifics of every project are different.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Layers />, title: "When Something Needs to Be Built", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", desc: "A business process that no available product handles. A client-facing tool that needs to reflect how your operation actually works rather than forcing you to adapt to generic software." },
            { icon: <Wrench />, title: "When Something Needs to Be Repaired", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80", desc: "Software that was delivered and is technically running but not doing what it was supposed to. Systems that have slowed down to the point of frustrating everyone who uses them." },
            { icon: <GitMerge />, title: "When Systems Need to Connect", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", desc: "Accounting software that does not talk to inventory. Customer data that lives in one place and billing data that lives in another. We build the connections." }
          ].map((card, i) => (
            <motion.div key={i} variants={fadeUpVariant} className="group bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col hover:border-zinc-700 transition-colors duration-500">
              <div className="relative h-48 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>
              <div className="p-8 pt-4 flex-1">
                <div className="text-white mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 2: WHY CLIENTS COME BACK */}
      <section className="py-24 px-6 bg-[#020202] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="relative h-[500px] rounded-[2rem] overflow-hidden border border-zinc-900 hidden lg:block"
          >
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" alt="Team" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020202] to-transparent" />
          </motion.div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase mb-10">Why Clients Come Back</h2>
            <div className="space-y-8">
              {[
                "We read the problem before we recommend the solution.",
                "Every project has direct involvement from the people responsible for it.",
                "We hand over documentation that actually explains what was built.",
                "When something is not right after delivery, we deal with it."
              ].map((text, i) => (
                <motion.div key={i} variants={fadeUpVariant} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-lg leading-relaxed font-medium">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOTTOM CTA */}
      <section className="py-32 px-6 relative flex justify-center bg-[#050505]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="text-center max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tighter leading-tight">
            If your software is costing you more time or money than it should, that is worth a conversation.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" onClick={scrollToTop}>
              <button className="flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-zinc-200 transition-all w-full sm:w-auto justify-center">
                <Mail className="w-4 h-4" />
                Write to Us
              </button>
            </Link>

            <Link to="/contact" onClick={scrollToTop}>
              <button className="flex items-center gap-2 bg-transparent border border-zinc-700 text-white hover:border-zinc-500 px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all w-full sm:w-auto justify-center">
                <PhoneCall className="w-4 h-4" />
                Book a Direct Call
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default HomeSections;