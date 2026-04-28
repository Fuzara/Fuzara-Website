"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, X, ShieldCheck, Download } from "lucide-react";

const GlitchText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsGlitching(false), 800 + delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isGlitching) return <span>{text}</span>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ 
        opacity: [0, 1, 0, 1], 
        x: [0, -2, 2, -1, 1, 0],
        filter: ["blur(4px)", "blur(0px)", "blur(2px)", "blur(0px)"]
      }}
      transition={{ duration: 0.4, delay, times: [0, 0.2, 0.4, 1] }}
      className="inline-block relative"
    >
      <span className="absolute top-0 left-[1px] text-red-500 opacity-70 mix-blend-screen">{text}</span>
      <span className="absolute top-0 -left-[1px] text-blue-500 opacity-70 mix-blend-screen">{text}</span>
      <span className="relative text-white">{text}</span>
    </motion.div>
  );
};

export const FounderDossier = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full max-w-5xl mx-auto z-30 font-mono text-emerald-500/80 my-24">
      
      {/* Small ID Card Trigger */}
      <motion.div 
        layoutId="dossier-card"
        onClick={() => !isExpanded && setIsExpanded(true)}
        className={`bg-[#0A0A0A]/80 backdrop-blur-md border border-[#10b981]/30 p-6 flex flex-col items-center gap-4 cursor-pointer hover:border-[#10b981]/60 transition-colors w-64 mx-auto ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Fingerprint className="text-[#10b981] w-12 h-12" />
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-500">Access Record</p>
          <p className="text-white font-bold tracking-tight">PERSONNEL 001</p>
        </div>
      </motion.div>

      {/* Expanded Dossier Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              layoutId="dossier-card"
              className="bg-[#0A0A0A] border border-[#10b981]/50 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col relative"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-[#10b981]/20 bg-[#10b981]/5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#10b981]" />
                  <span className="font-bold tracking-widest text-[#10b981] uppercase text-sm">
                    <GlitchText text="CONFIDENTIAL // HIGH CLEARANCE" delay={0.1} />
                  </span>
                </div>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-[#10b981]/60 hover:text-white transition-colors"
                >
                  <X />
                </button>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-10">
                
                {/* Left Column: ID & Meta */}
                <div className="md:col-span-4 flex flex-col gap-6">
                  {/* Profile Image Frame */}
                  <div className="aspect-[3/4] w-full border border-[#10b981]/30 relative group overflow-hidden bg-black flex items-center justify-center">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#10b981]/10 to-transparent" />
                     {/* Scanning Line overlay */}
                     <motion.div 
                       animate={{ top: ['0%', '100%', '0%'] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                       className="absolute left-0 right-0 h-[2px] bg-[#10b981]/50 z-20 shadow-[0_0_8px_#10b981]"
                     />
                     <span className="uppercase text-xs tracking-widest z-10 opacity-50 block mt-auto mb-4">
                       [NO CURRENT VISUAL DATA]
                     </span>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-3 font-mono text-xs uppercase tracking-widest text-[#10b981]/80">
                    <div className="flex justify-between border-b border-[#10b981]/20 pb-1">
                      <span className="opacity-50">Name:</span>
                      <span className="text-white"><GlitchText text="EDWARD KARANJA" delay={0.3} /></span>
                    </div>
                    <div className="flex justify-between border-b border-[#10b981]/20 pb-1">
                      <span className="opacity-50">Alias:</span>
                      <span className="text-white"><GlitchText text="EDDIE" delay={0.4} /></span>
                    </div>
                    <div className="flex justify-between border-b border-[#10b981]/20 pb-1">
                      <span className="opacity-50">Clearance:</span>
                      <span className="text-red-400 font-bold"><GlitchText text="CYBER-FORENSICS" delay={0.5} /></span>
                    </div>
                    <div className="flex justify-between border-b border-[#10b981]/20 pb-1">
                      <span className="opacity-50">Status:</span>
                      <span className="text-[#10b981] flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        <GlitchText text="RPL CERTIFIED" delay={0.6} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Bio & Data */}
                <div className="md:col-span-8 flex flex-col gap-8 font-sans text-[#E7E5E4]">
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <h3 className="text-[#10b981] font-mono text-xs uppercase tracking-widest border-l-2 border-[#10b981] pl-3 mb-4">
                      Section 1: Academic Record
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Specializing in Cybersecurity & Forensics, holding a 2nd Upper Class honors. Demonstrates profound capability in secure architecture design and penetration analytics.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <h3 className="text-[#10b981] font-mono text-xs uppercase tracking-widest border-l-2 border-[#10b981] pl-3 mb-4">
                      Section 2: Operational Pillar
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Founder and Chief Architect of Fuzara Technologies. Instrumental in the deployment of discrete, highly-specialized divisions: <span className="text-white font-medium">Amenic Films</span>, <span className="text-blue-400 font-medium">Fuzara Dev</span>, and <span className="text-red-400 font-medium">Drone Masters</span>.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    className="space-y-2"
                  >
                    <h3 className="text-[#10b981] font-mono text-xs uppercase tracking-widest border-l-2 border-[#10b981] pl-3 mb-4">
                      Section 3: Mission Vision
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Positioning Fuzara as Africa's premier technology and data integrity hub. Focused on relentless innovation, zero-compromise security standards, and high-fidelity tactical systems.
                    </p>
                  </motion.div>

                  {/* Actions */}
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                    className="mt-auto pt-6 border-t border-[#10b981]/20 flex justify-end"
                  >
                    <button className="flex items-center gap-2 bg-[#10b981]/10 hover:bg-[#10b981]/20 border border-[#10b981]/40 px-6 py-3 text-[#10b981] font-mono uppercase text-xs tracking-widest transition-all">
                      <Download size={14} />
                      [EXPORT_DATA]
                    </button>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
