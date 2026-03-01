import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            PRIVACY POLICY
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
            Arktantra Private Limited operates the website arktantrasoftware.in and provides software services to clients. This policy explains what information we collect, how we use it, and how we protect it.
          </p>

          {/* Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">What We Collect</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Through our website contact form and direct communications, we collect names, email addresses, phone numbers, company details, and any information you include in your message. When you visit our website, standard technical data is collected automatically - IP address, browser type, pages visited. In the course of project work, we may access client systems and data as required to deliver the agreed services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">How We Use It</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                We use the information we collect to respond to enquiries, scope and deliver project work, communicate about ongoing engagements, and improve how we operate. We do not sell data. We do not share it with third parties for commercial purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">How Long We Keep It</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Contact information from enquiries that did not result in a project is kept for up to twelve months. Client project data is retained as required by legal and accounting obligations. You can request deletion of your personal data at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Security</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Client data and project information is handled with strict confidentiality. We sign mutual NDAs before sensitive discussions and maintain that confidentiality throughout and after every engagement. We apply appropriate technical measures to prevent unauthorized access to data we hold.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Cookies</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Our website uses cookies for basic functionality and analytics. Cookie preferences can be managed through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Your Rights</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                You can request access to, correction of, or deletion of personal information we hold about you. Contact us at Help@arktantrasoftware.in.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Changes</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                This policy may be updated. Changes are posted here with a revised date.
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

export default PrivacyPolicy;