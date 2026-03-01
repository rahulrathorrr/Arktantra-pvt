import React from 'react';
import { motion } from 'framer-motion';
import { Target, FileSignature, Layers, BookMarked, LifeBuoy } from 'lucide-react';

const OurApproach = () => {
  const approachSteps = [
    {
      id: "01",
      title: "We Start With the Problem, Not the Solution",
      icon: <Target className="w-8 h-8 lg:w-12 lg:h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      content: [
        "The fastest way to build the wrong thing is to start building before the problem is fully understood. This sounds obvious and yet it is how most software projects begin - with a solution in mind, a timeline attached to it, and discovery treated as a formality rather than a real process.",
        "Every Arktantra engagement begins with a structured discovery phase. We ask questions that go beyond the technical specification: why does this process work the way it does, what breaks when this system fails, who are the people using this every day and what frustrates them about the current situation. The answers shape what gets built. Sometimes they change what we thought needed to be built entirely."
      ]
    },
    {
      id: "02",
      title: "Scope That Means Something",
      icon: <FileSignature className="w-8 h-8 lg:w-12 lg:h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80",
      content: [
        "A project scope written before proper discovery is an estimate. It might be a well-intentioned estimate, but it is not a commitment. We write scope documents after discovery because those are the only ones worth signing.",
        "Our scope documents describe what will be delivered, what it will do, and what it will not do. They describe what is in scope and what is explicitly out of scope. They are written in plain language that a non-technical client can read and understand. If a scope document requires a technical translator, it is not serving its purpose."
      ]
    },
    {
      id: "03",
      title: "Regular Reviews, Not Final Reveals",
      icon: <Layers className="w-8 h-8 lg:w-12 lg:h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      content: [
        "Software delivered in one large release at the end of a project is software that has accumulated assumptions for months without being tested against reality. We work in short cycles and hold regular reviews where clients see working software and give feedback while acting on that feedback is still practical.",
        "This is not just better for quality. It means clients are never surprised by what they receive. They have seen it being built."
      ]
    },
    {
      id: "04",
      title: "Documentation as a Deliverable",
      icon: <BookMarked className="w-8 h-8 lg:w-12 lg:h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      content: [
        "A system that only the people who built it understand is a liability. If we are no longer involved, the client should be able to hand their codebase to any competent developer and have that developer understand what is there and why it works the way it does.",
        "We treat documentation as part of every deliverable - not an afterthought produced when the client asks for it. Architecture decisions, integration points, configuration details, deployment procedures. Written clearly, kept current throughout the project."
      ]
    },
    {
      id: "05",
      title: "After Handover",
      icon: <LifeBuoy className="w-8 h-8 lg:w-12 lg:h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&q=80",
      content: [
        "The period immediately after a system goes live is when real-world conditions reveal things that testing did not. We stay closely available for the first month after any project handover at no additional charge. Issues that arise in that period are addressed as part of the project.",
        "After that, clients who want ongoing coverage move to a maintenance arrangement. Clients who do not still have a direct line to us for questions. We do not treat a closed project as a closed relationship."
      ]
    }
  ];

  return (
    <div className="bg-[#050505] text-white relative z-10 min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* ULTRA MINIMAL HERO */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[50vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold mb-6">Our Approach</p>
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] text-white mb-10 max-w-5xl">
            HOW WE<br />
            <span className="text-zinc-600">THINK ABOUT</span><br />
            SOFTWARE.
          </h1>
          <p className="text-xl md:text-3xl font-medium text-zinc-400 max-w-3xl leading-snug">
            How Arktantra thinks about software work and what that means in practice for a client engagement.
          </p>
        </motion.div>
      </section>

      {/* SPLIT SCREEN STICKY LAYOUT (100% Foolproof) */}
      <section className="border-t border-zinc-900">
        {approachSteps.map((step, index) => (
          <div key={index} className="flex flex-col lg:flex-row border-b border-zinc-900 relative">
            
            {/* LEFT SIDE: Sticky Title & Icon */}
            <div className="lg:w-5/12 lg:border-r border-zinc-900 relative">
              <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center p-8 lg:p-16 xl:p-24">
                
                {/* Background Giant Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] xl:text-[18rem] font-black text-white/[0.02] pointer-events-none select-none">
                  {step.id}
                </div>

                <div className="relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-2xl"
                  >
                    {step.icon}
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                  >
                    {step.title}
                  </motion.h2>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Scrolling Content & Image */}
            <div className="lg:w-7/12 p-8 lg:p-16 xl:p-24 flex flex-col justify-center lg:min-h-screen bg-[#0a0a0a]">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium mb-16"
              >
                {step.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden group border border-zinc-800"
              >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </motion.div>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};

export default OurApproach;