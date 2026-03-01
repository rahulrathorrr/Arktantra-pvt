import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="bg-[#050505] text-white relative z-10 min-h-screen font-sans selection:bg-white selection:text-black pb-32">
      
      {/* HEADER */}
      <section className="pt-48 pb-16 px-6 max-w-[1000px] mx-auto border-b border-zinc-900">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white mb-8 uppercase">
            TERMS OF SERVICE
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-zinc-500 font-bold tracking-widest uppercase text-xs">
            <span>Effective: 2026</span>
            <span className="hidden sm:block">|</span>
            <span>Last Reviewed: 2026</span>
          </div>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="px-6 max-w-[1000px] mx-auto mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16"
        >
          {/* Intro */}
          <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed">
            These Terms govern use of arktantrasoftware.in and the software services provided by Arktantra Private Limited. Using our website or engaging our services means you accept these Terms.
          </p>

          {/* Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Scope of Services</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Arktantra provides software development, diagnosis and repair, system integration, modernisation, and maintenance services. The specific deliverables, timelines, and pricing for each engagement are set out in a project agreement signed before work begins. These Terms apply alongside that agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Website Use</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                This website may be used for lawful purposes only. Unauthorized access attempts, introduction of malicious code, content scraping without permission, and use that violates Indian law are prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Client Obligations</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Project delivery depends on timely access to information, systems, and feedback from the client side. Where client delays affect project timelines or cost, we will raise this directly rather than absorbing it silently. We expect the same directness in return.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Intellectual Property</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Software developed for a client transfers to the client on full payment unless agreed otherwise in writing. Internal tools, libraries, and frameworks used in delivery remain the property of Arktantra. Specific arrangements are documented in each project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Confidentiality</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                All client information is treated as confidential. NDAs are signed before any sensitive discussion begins. This obligation continues after the engagement ends.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Liability</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Arktantra's liability for any claim is limited to the fees paid in the three months preceding the event giving rise to the claim. We are not liable for indirect, consequential, or business losses. Software operates in complex environments and we do not warrant against all possible failure conditions - we do warrant that genuine defects in our work will be addressed promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Governing Law</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                These Terms are governed by Indian law. Disputes fall under the jurisdiction of courts in Pune, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Updates</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                These Terms may be updated. The current version is always posted on this page. Continued use of our services constitutes acceptance of the current Terms.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-900">
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Contact</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Arktantra Private Limited - Help@arktantrasoftware.in<br />
                Office No D-208, Sr No 282, Gini Bellina, Porwal Road,<br />
                Lohogaon, Pune, Maharashtra - 411047
              </p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default TermsOfService;