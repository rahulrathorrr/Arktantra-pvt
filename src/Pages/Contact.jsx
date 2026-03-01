import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle, ArrowRight, Building2, Globe, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating a quick network request (1.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const faqs = [
    {
      q: "Is there a minimum project size?",
      a: "No fixed minimum. We have handled focused engagements that took a few weeks and larger projects that ran for several months. What matters is that the problem is real and the scope is achievable."
    },
    {
      q: "Can you work with an existing codebase written by someone else?",
      a: "Yes. We review it before committing to any specific scope or price, and we are direct about what we find. Some codebases are in better shape than the client expects. Some are worse. We tell you either way."
    },
    {
      q: "Do you sign confidentiality agreements?",
      a: "Yes, before any technical or business details are shared. This is standard practice for every engagement."
    },
    {
      q: "How do you handle projects where the requirements might change?",
      a: "We structure these as time and materials engagements with regular scope reviews. Requirements change in most real projects - the question is whether the contract structure acknowledges that honestly or pretends it will not happen."
    },
    {
      q: "We are not based in Pune. Can you still work with us?",
      a: "Yes. Most of our work is handled remotely. We travel when the project genuinely requires it."
    }
  ];

  return (
    <div className="bg-[#050505] text-white relative z-10 min-h-screen font-sans selection:bg-white selection:text-black pb-32">
      
      {/* MASSIVE HEADER */}
      <section className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto border-b border-zinc-900">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[8rem] xl:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase"
        >
          CONTACT
        </motion.h1>
      </section>

      {/* MAIN SPLIT LAYOUT */}
      <section className="px-6 max-w-[1400px] mx-auto mt-16 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* LEFT COLUMN: THE STICKY FORM */}
        <div className="lg:w-5/12 relative">
          <div className="lg:sticky lg:top-32 w-full">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#0a0a0a] border border-zinc-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
                >
                  <h2 className="text-3xl font-black mb-8 tracking-tight">Write to Us</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Name</label>
                        <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:border-white transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email</label>
                        <input required type="email" className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:border-white transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Phone</label>
                        <input required type="tel" className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:border-white transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Company</label>
                        <input type="text" className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:border-white transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">What is the software problem you are dealing with?</label>
                      <textarea required rows="4" className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:border-white transition-colors resize-none custom-scrollbar" />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full bg-white text-black font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Send
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                  className="bg-emerald-950/30 border border-emerald-900/50 p-12 rounded-[2rem] flex flex-col items-center justify-center text-center min-h-[500px]"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                    className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                  >
                    <CheckCircle className="w-12 h-12 text-black" />
                  </motion.div>
                  <h3 className="text-4xl font-black text-white mb-4">Received.</h3>
                  <p className="text-emerald-400/80 text-lg font-medium">We will review your details and get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* RIGHT COLUMN: INFO & FAQS (Scrolling) */}
        <div className="lg:w-7/12 space-y-24">
          
          {/* Write to us text */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xl md:text-2xl font-medium text-zinc-400 leading-relaxed">
              Describe what you are dealing with - the more specific you can be about the problem, the more useful our response will be. If you are not sure how to describe it yet, that is fine too. We are used to working that out in conversation.
            </p>
          </motion.div>

          {/* Company Details Grid */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-zinc-900 py-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-500 mb-2">
                <Building2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Company</span>
              </div>
              <p className="text-xl font-bold text-white">Arktantra Private Limited</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-500 mb-2">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Website</span>
              </div>
              <p className="text-xl font-bold text-white">arktantrasoftware.in</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-500 mb-2">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Email</span>
              </div>
              <p className="text-xl font-bold text-white">Help@arktantrasoftware.in</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-zinc-500 mb-2">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest">Office Address</span>
              </div>
              <p className="text-lg font-medium text-zinc-300 leading-relaxed">
                Office No D-208, Sr No 282, Gini Bellina, Porwal Road,<br />
                Lohogaon, Pune, Maharashtra - 411047
              </p>
            </div>
          </motion.div>

          {/* Response & Meetings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <h3 className="text-2xl font-black text-white">Response</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                We respond to every message personally within one business day. We do not use automated acknowledgement emails or ticket numbers. You will hear from a person.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <h3 className="text-2xl font-black text-white">In-Person Meetings</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                We are available for in-person meetings at our Lohogaon office or at your location for clients in the Pune area. For clients elsewhere in India, we work primarily over video calls with travel available for projects that require it.
              </p>
            </motion.div>
          </div>

          {/* FAQs Accordion */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-12">Questions We Get Often</h2>
            
            <div className="border-t border-zinc-900">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="border-b border-zinc-900 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-xl md:text-2xl font-bold pr-8 transition-colors ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                        {faq.q}
                      </h3>
                      <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'bg-white border-white text-black' : 'border-zinc-700 text-white group-hover:border-zinc-500'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="pb-8 text-zinc-400 text-lg leading-relaxed font-medium pr-12">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Internal CSS for textarea scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #3f3f46;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
};

export default Contact;